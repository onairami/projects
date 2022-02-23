package com.onairami.web.issuetracker.controller;

import com.onairami.web.issuetracker.domain.Reply;
import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.domain.User;
import com.onairami.web.issuetracker.dto.ReplyDTO;
import com.onairami.web.issuetracker.dto.TicketDTO;
import com.onairami.web.issuetracker.dto.TicketDetailDTO;
import com.onairami.web.issuetracker.service.SectorService;
import com.onairami.web.issuetracker.service.TicketService;
import com.onairami.web.issuetracker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/protected")
public class ProtectedController {

    @Autowired
    UserService userService;

    @Autowired
    SectorService sectorService;

    @Autowired
    TicketService ticketService;

    @CrossOrigin
    @GetMapping("/getassignedtickets")
    public List<TicketDTO> getUserAssignedTickets(HttpServletRequest request) {
        Long userId = (Long) request.getAttribute("userId");
        return ticketService.getUserAssignedActiveTicketsDTO(userId);
    }

    @CrossOrigin
    @GetMapping("/getticket/{ticketId}")
    public TicketDetailDTO getTicket(@PathVariable Long ticketId) {
        return ticketService.getTicket(ticketId);
    }

    @CrossOrigin
    @GetMapping("/ticket/{ticketId}")
    public TicketDetailDTO getTicket2(@PathVariable Long ticketId) {
        return ticketService.getTicket(ticketId);
    }

    @CrossOrigin
    @PutMapping("/updateticket")
    public Ticket updateTicket(@RequestBody Ticket ticket) {
        return ticketService.updateTicket(ticket);
    }

    @CrossOrigin
    @GetMapping("/{ticketId}/getReplies")
    public List<ReplyDTO> getTicketReplies(@PathVariable Long ticketId) {
        List<ReplyDTO> replyList = new ArrayList<>();

        for (Reply reply: ticketService.getRepliesByTicketId(ticketId)) {
            replyList.add(ticketService.replyToReplyDTO(reply));
        }
        return replyList;
    }

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

    @CrossOrigin
    @GetMapping("/sectorusersbyid/{sectorId}")
    public List<Map<String, String>> getSectorUsersBySectorId(@PathVariable Long sectorId) {

        List<Map<String, String>> users = new ArrayList<>();

        for (User user : sectorService.getSectorUsersBySectorId(sectorId)) {
            Map<String, String> usersMap = new HashMap<>();

            usersMap.put("userId", user.getUserId().toString());
            usersMap.put("username", user.getUsername());

            users.add(usersMap);
        }
        return users;
    }

    @CrossOrigin
    @GetMapping("/getsectors")
    public List<Sector> getSectors() {

        return sectorService.getSectors();
    }

    @CrossOrigin
    @PostMapping("/newReply")
    public Reply newReply(@RequestBody Map<String, String> reply) {
        return ticketService.createNewReply(reply);
    }

    @CrossOrigin
    @PostMapping("/newticket")
    public String getTicketReplies(@RequestBody /*Map<String, String> */Ticket ticketMap) {
        ticketService.createNewTicket2(ticketMap);
        return "Listo";
    }
}
