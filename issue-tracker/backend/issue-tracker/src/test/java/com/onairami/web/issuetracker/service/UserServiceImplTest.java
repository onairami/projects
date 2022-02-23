package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.dao.SectorDAO;
import com.onairami.web.issuetracker.dao.TicketDAO;
import com.onairami.web.issuetracker.dao.UserDAO;
import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.domain.User;
import com.onairami.web.issuetracker.exception.EtAuthException;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest()
class UserServiceImplTest {

    @Autowired
    UserService userService;

    @Autowired
    UserDAO userDAO;

    @Autowired
    TicketDAO ticketDAO;

    @Autowired
    SectorDAO sectorDAO;

    User testUser;
    Sector testSector1;
    Sector testSector2;
    Sector testSector3;
    Sector testSector4;
    Ticket ticket1;
    Ticket ticket2;

    @BeforeAll
    void setUp() {
        testUser = userDAO.save(new User(
                "testUser",
                "test",
                "user",
                "test@user.ar",
                "asdfdfdasf"));

        testSector1 = sectorDAO.save(new Sector(
                "Test sector 1",
                "Test sector 1"
        ));

        testSector2 = sectorDAO.save(new Sector(
                "Test sector 2",
                "Test sector 2"
        ));

        testSector3 = sectorDAO.save(new Sector(
                "Test sector 3",
                "Test sector 3"
        ));

        testSector4 = sectorDAO.save(new Sector(
                "Test sector 4",
                "Test sector 4"
        ));

        userDAO.addUserToSector(testUser.getUserId(), testSector1.getSectorId());
        userDAO.addUserToSector(testUser.getUserId(), testSector2.getSectorId());
        userDAO.addUserToSector(testUser.getUserId(), testSector3.getSectorId());
        userDAO.addUserToSector(testUser.getUserId(), testSector4.getSectorId());

        ticket1 = ticketDAO.save(new Ticket(
                        testUser.getUserId(),
                        testUser.getUserId(),
                        "Summary 1",
                        "Desc 1",
                        testSector1.getSectorId(),
                        "OPEN",
                        new Date()
                        )
                );

        ticket2 = ticketDAO.save(new Ticket(
                        testUser.getUserId(),
                        testUser.getUserId(),
                        "Summary 2",
                        "Desc 2",
                        testSector2.getSectorId(),
                        "OPEN",
                        new Date()
                )
        );
    }

    @Test()
    void authenticateUser() {
        assertThrows(EtAuthException.class, () -> {
            userService.authenticateUser("user1", "pass2");
        });
    }

    @Test
    void correctAuthTest() {
        String actual = userService.authenticateUser("user1", "pass1").getUsername();
        String expected = "user1";
        assertEquals(expected,actual);
    }

    @Test
    void emptySectorsForNonExistentUser() {
        Integer actual = userService.getUserSectors(1234456L).size();
        Integer expected = 0;
        assertEquals(expected, actual);
    }

    @Test
    void correctSectorsForExistentUser() {
        Integer actual = userService.getUserSectors(testUser.getUserId()).size();
        Integer expected = 4;
        assertEquals(expected, actual);
    }

    @AfterAll
    void clean() {
        userDAO.removeUserFromSector(testUser.getUserId());
        ticketDAO.delete(ticket1);
        ticketDAO.delete(ticket2);
        sectorDAO.delete(testSector1);
        sectorDAO.delete(testSector2);
        sectorDAO.delete(testSector3);
        sectorDAO.delete(testSector4);
        userDAO.delete(testUser);
    }
}