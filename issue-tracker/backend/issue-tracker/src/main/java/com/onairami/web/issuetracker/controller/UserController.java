package com.onairami.web.issuetracker.controller;

import com.onairami.web.issuetracker.domain.*;
import com.onairami.web.issuetracker.dto.ReplyDTO;
import com.onairami.web.issuetracker.dto.TicketDTO;
import com.onairami.web.issuetracker.dto.TicketDetailDTO;
import com.onairami.web.issuetracker.dto.UserDTO;
import com.onairami.web.issuetracker.exception.EtAuthException;
import com.onairami.web.issuetracker.service.SectorService;
import com.onairami.web.issuetracker.service.TicketService;
import com.onairami.web.issuetracker.service.UserService;
import com.onairami.web.issuetracker.util.Constants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping(path="/api/public")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    SectorService sectorService;

    @Autowired
    TicketService ticketService;

    private Map<String, String> generateJWTToken(User user) {
        Long timestamp = System.currentTimeMillis();

        String token = Jwts.builder() .signWith(SignatureAlgorithm.HS256, Constants.API_SECRET_KEY)
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date(timestamp + Constants.TOKEN_VALIDITY))
                .claim("userId", user.getUserId())
                .claim("username", user.getUsername())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .compact();

        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        return map;
    }

    @CrossOrigin//(origins = "http://localhost") ARREGLAR ESTO
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginForm loginForm){
        String username = loginForm.getUsername();
        String password = loginForm.getPassword();
        System.out.println(("Llego la solicitud para el usuario "+username));
        User user = userService.authenticateUser(username, password);

        Map<String, String> map = new HashMap<>(this.generateJWTToken(user));

        map.put("userId",user.getUserId().toString());
        map.put("username", user.getUsername());

        System.out.println(map);

        return map;
    }

    @GetMapping("/getusers")
    public User getUsers() {
//        return new User("nombre", "apellido", "email", "pass");
        return null;
    }

    @PostMapping("/register")
    public String createUser() {
//        return userService.registerUser();
        return "Por ahora nada";

    }

    @GetMapping("/{userId}/usersectors")
    public List<Sector> getUserSectors(@PathVariable Long userId) {
        return userService.getUserSectors(userId);
    }

    @CrossOrigin
    @GetMapping("/{userId}/gettickets")
    public List<Ticket> getUserAllowedTickets(@PathVariable Long userId) {
        return userService.getUserAllowedTickets(userId);
    }

//    @CrossOrigin
//    @GetMapping("/ticket/{ticketId}")
//    public TicketDetailDTO getTicket(@PathVariable Long ticketId) {
//        return ticketService.getTicket(ticketId);
//    }

//    @CrossOrigin
//    @GetMapping("/{userId}/getassignedtickets")
//    public List<TicketDTO> getUserAssignedTickets(@PathVariable Long userId) {
//        return ticketService.getUserAssignedActiveTicketsDTO(userId);
//    }

//    @CrossOrigin
//    @GetMapping("/{ticketId}/getReplies")
//    public List<ReplyDTO> getTicketReplies(@PathVariable Long ticketId) {
//        List<ReplyDTO> replyList = new ArrayList<>();
//
//        for (Reply reply: ticketService.getRepliesByTicketId(ticketId)) {
//            replyList.add(ticketService.replyToReplyDTO(reply));
//        }
//        return replyList;
//    }

//    @CrossOrigin
//    @PostMapping("/newticket")
//    public String getTicketReplies(@RequestBody Map<String, String> ticketMap) {
//        ticketService.createNewTicket(ticketMap);
//        return "Listo";
//    }

//    @CrossOrigin
//    @GetMapping("/sectorusers/{sectorName}")
//    public List<Map<String, String>> getSectorUsersBySectorName(@PathVariable String sectorName) {
//
//        List<Map<String, String>> users = new ArrayList<>();
//
//        for (User user : sectorService.getSectorUsers(sectorName)) {
//            Map<String, String> usersMap = new HashMap<>();
//
//            usersMap.put("username", user.getUsername());
//            usersMap.put("firstName", user.getFirstName());
//
//            users.add(usersMap);
//        }
//        return users;
//    }

//    @CrossOrigin
//    @GetMapping("/sectorusersbyid/{sectorId}")
//    public List<Map<String, String>> getSectorUsersBySectorId(@PathVariable Long sectorId) {
//
//        List<Map<String, String>> users = new ArrayList<>();
//
//        for (User user : sectorService.getSectorUsersBySectorId(sectorId)) {
//            Map<String, String> usersMap = new HashMap<>();
//
//            usersMap.put("username", user.getUsername());
//            usersMap.put("firstName", user.getFirstName());
//
//            users.add(usersMap);
//        }
//        return users;
//    }

//    @CrossOrigin
//    @GetMapping("/getsectors")
//    public List<Sector> getSectors() {
//
//        return sectorService.getSectors();
//    }


//    @CrossOrigin
//    @PostMapping("/newReply")
//    public String newReply(@RequestBody Map<String, String> reply) {
//        ticketService.createNewReply(reply);
//        System.out.println(reply);
//        return "Listo";
//    }
}
