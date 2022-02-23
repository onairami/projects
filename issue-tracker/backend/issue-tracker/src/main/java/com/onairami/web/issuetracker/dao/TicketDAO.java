package com.onairami.web.issuetracker.dao;

import com.onairami.web.issuetracker.domain.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketDAO extends JpaRepository<Ticket, Long> {

//    @Query("select t from Ticket t join fetch t.ticketAssignee where t.ticketId = :ticket_id")
    Ticket findTicketByTicketId(/*@Param("ticket_id")*/ Long ticketId);

    List<Ticket> findTicketsByTicketAssignee(Long userId);

//    @Query("select t from Ticket t join fetch t.ticketAssignee join User s on t.ticketAssignee = s.userId where t.ticketStatus <> 'CLOSED' and s.userId = :ticket_assignee")
    @Query(value = "select * from tickets where ticket_status <> 'CLOSED' and ticket_assignee = :ticket_assignee", nativeQuery = true)
    List<Ticket> findActiveTicketsByTicketAssignee(@Param("ticket_assignee") Long userId);

    @Procedure(procedureName = "tracker_logic.create_ticket")
    void createTicketProcedureName(
            @Param("creator") Long ticketCreator,
            @Param("assignee") Long ticketAssignee,
            @Param("summary") String ticketSummary,
            @Param("description") String ticketDescription,
            @Param("sector") Long ticketSector,
            @Param("status") String ticketStatus,
            @Param("exit_code") Long res);

    Ticket save(Ticket ticket);

    void delete(Ticket ticket);


//    @Query("select t.ticketId, t.ticketStatus, t.ticketSummary from Ticket t where t.ticketStatus <> 'CLOSED' and t.ticketssignee = :ticket_assignee")
//    List<TicketDTO> findActiveTicketsByTicketAssignee(@Param("ticket_assignee") Long userId);
}
