package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.dao.ReplyDAO;
import com.onairami.web.issuetracker.dao.SectorDAO;
import com.onairami.web.issuetracker.dao.TicketDAO;
import com.onairami.web.issuetracker.dao.UserDAO;
import com.onairami.web.issuetracker.domain.Reply;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.domain.User;
import com.onairami.web.issuetracker.dto.ReplyDTO;
import com.onairami.web.issuetracker.dto.TicketDTO;
import com.onairami.web.issuetracker.dto.TicketDetailDTO;
import com.onairami.web.issuetracker.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketDAO ticketDAO;

    @Autowired
    UserDAO userDAO;

    @Autowired
    ReplyDAO replyDAO;

    @Autowired
    SectorDAO sectorDAO;

    @Autowired
    UserService userService;

    @Override
    public TicketDetailDTO getTicket(Long ticketId) {
        Ticket ticket = ticketDAO.findTicketByTicketId(ticketId);
//        User creator = userService.getUserByUserId(ticket.getTicketCreator().getUserId());
//        User assignee = userService.getUserByUserId(ticket.getTicketAssignee().getUserId());
//        UserDTO creatorDTO = userService.userToUserDto(creator);
//        UserDTO assigneeDTO = userService.userToUserDto(assignee);
        UserDTO creatorDTO = userService.userToUserDto(userService.getUserByUserId(ticket.getTicketCreator()));
        UserDTO assigneeDTO = userService.userToUserDto(userService.getUserByUserId(ticket.getTicketAssignee()));
        TicketDetailDTO ticketDetailDTO = new TicketDetailDTO(ticket.getTicketId(),
                creatorDTO,
                assigneeDTO,
                ticket.getTicketSummary(),
                ticket.getTicketDescription(),
                ticket.getTicketSector(),
                sectorDAO.findSectorNameBySectorId(ticket.getTicketSector()),
                ticket.getTicketStatus(),
                ticket.getTicketCreationDate());
        return ticketDetailDTO;
    }

//    @Override
//    public Ticket getTicket(Long ticketId) {
//        Ticket ticket = ticketDAO.findTicketByTicketId(ticketId);
//        UserDTO userDTO = new UserDTO(ticket.getTicketCreator().getUserId(), ticket.getTicketCreator().getUsername());
//        ticket.setTicketCreator(userDTO);
//        return ticket;
//    }

    @Override
    public List<Ticket> getUserAssignedActiveTickets(Long userId) {
//        return ticketDAO.findActiveTicketsByTicketAssignee(userId);
        return null;
    }

    @Override
    public List<TicketDTO> getUserAssignedActiveTicketsDTO(Long userId) {
        List<TicketDTO> tickets = new ArrayList<>();
        for (Ticket ticket : ticketDAO.findActiveTicketsByTicketAssignee(userId)) {
//            UserDTO userDTO = new UserDTO(ticket.getTicketCreator().getUserId(), ticket.getTicketCreator().getUsername());
//            tickets.add(new TicketDTO(ticket.getTicketId(), ticket.getTicketStatus(), ticket.getTicketSummary(), userDTO));
            tickets.add(this.ticketToTicketDto(ticket));
        }

        return tickets;
    }

    @Override
    public TicketDTO ticketToTicketDto(Ticket ticket) {
        return new TicketDTO(ticket.getTicketId(), ticket.getTicketStatus(), ticket.getTicketSummary(), userService.userToUserDto(userService.getUserByUserId(ticket.getTicketCreator())));
    }

    @Override
    public Page<Reply> getRepliesByTicketId(Long ticketId) {
        Pageable pageable = PageRequest.of(0,10, Sort.by("replyDate").descending());
        Page<Reply> repliesPage = replyDAO.findRepliesByReplyTicket(ticketId, pageable);

        return repliesPage;
    }

    @Override
    public void createNewTicket(Map<String, String> ticketMap) {
        Long res = 0L;
        ticketDAO.createTicketProcedureName(
                Long.parseLong(ticketMap.get("ticketCreator")),
//                Long.parseLong(ticketMap.get("ticketAssignee")),
                userDAO.findUserIdByUsername(ticketMap.get("ticketAssignee")),
                ticketMap.get("ticketSummary"),
                ticketMap.get("ticketDescription"),
                Long.parseLong(ticketMap.get("ticketSector")),
                ticketMap.get("ticketStatus"),
                res);
    }

    @Override
    public void createNewTicket2(Ticket ticketmap) {
        ticketDAO.save(ticketmap);
    }

    @Override
    public Reply createNewReply(Map<String, String> replyMap) {
        Reply reply = new Reply(
                Long.parseLong(replyMap.get("ticketId")),
                Long.parseLong(replyMap.get("author")),
                replyMap.get("text"),
                new Date());
        return replyDAO.save(reply);
    }

    @Override
    public ReplyDTO replyToReplyDTO(Reply reply) {
        return new ReplyDTO(reply.getReplyTicket(),userService.getUsernameByUserId(reply.getReplyAuthor()), reply.getReplyText(),reply.getReplyDate());
    }

    @Override
    public Ticket updateTicket(Ticket ticket) {
        return ticketDAO.save(ticket);
    }
}
