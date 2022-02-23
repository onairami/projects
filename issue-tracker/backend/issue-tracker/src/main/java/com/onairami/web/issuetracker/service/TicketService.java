package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.domain.Reply;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.dto.ReplyDTO;
import com.onairami.web.issuetracker.dto.TicketDTO;
import com.onairami.web.issuetracker.dto.TicketDetailDTO;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

public interface TicketService {

    TicketDetailDTO getTicket(Long ticketId);

    List<Ticket> getUserAssignedActiveTickets(Long userId);

    List<TicketDTO> getUserAssignedActiveTicketsDTO(Long userId);

    TicketDTO ticketToTicketDto(Ticket ticket);

    Page<Reply> getRepliesByTicketId(Long ticketId);

    void createNewTicket(Map<String, String> ticketmap);

    void createNewTicket2(Ticket ticketmap);

    Reply createNewReply(Map<String, String> replyMap);

    ReplyDTO replyToReplyDTO(Reply reply);

    Ticket updateTicket(Ticket ticket);
}
