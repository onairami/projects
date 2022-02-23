package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.dao.SectorDAO;
import com.onairami.web.issuetracker.dao.TicketDAO;
import com.onairami.web.issuetracker.dao.UserDAO;
import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.domain.User;
import com.onairami.web.issuetracker.dto.UserDTO;
import com.onairami.web.issuetracker.exception.EtAuthException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataRetrievalFailureException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private SectorDAO sectorDAO;

    @Autowired
    private TicketDAO ticketDAO;

    @Override
    public String registerUser() {
        return null;//userDAO.createUser();
    }

    @Override
    public List<User> getUsers() {
        return userDAO.findAll();
    }

    public UserServiceImpl() {
    }

    @Override
    public List<Sector> getUserSectors(Long userId) {
        List<Sector> sectors = new ArrayList<>();
        for (Long sectorId: userDAO.findSectorsIdsByUserId(userId)) {
            sectors.add(sectorDAO.findSectorBySectorId(sectorId));
        }

        return sectors;
    }

    @Override
    public List<Ticket> getUserAllowedTickets(Long userId) {
        List<Ticket> tickets = new ArrayList<>();
        Ticket ticket;
        for (Long sectorId: userDAO.findSectorsIdsByUserId(userId)) {
            ticket = ticketDAO.findTicketByTicketId(sectorId);
            if (ticket != null) tickets.add(ticket);
        }
        return tickets;
    }

    @Override
    public Long getUserId(String username) {
        return userDAO.findUserIdByUsername(username);
    }

    @Override
    public User authenticateUser(String username, String password) throws EtAuthException {
        try {
            User user = userDAO.findByUsername(username);
            if (user == null) throw new EtAuthException("Invalid username/password");
            if (!password.equals(user.getPassword())) throw new EtAuthException("Invalid username/password");
//            return user.getUserId();
//            UserDTO userDTO = new UserDTO(user.getUserId(), user.getUsername());
//            UserDTO userDTO = this.userToUserDto(user);
            return user;
        } catch (DataRetrievalFailureException e){
            throw new EtAuthException("Invalid username/password");
        }
    }

    @Override
    public User getUserByUserId(Long userId) {
        return userDAO.findByUserId(userId);
    }

    @Override
    public UserDTO userToUserDto(User user) {
        return new UserDTO(user.getUserId(), user.getUsername());
    }

    @Override
    public String getUsernameByUserId(Long userId) {
        return userDAO.findUsernameByUserId(userId);
    }

}
