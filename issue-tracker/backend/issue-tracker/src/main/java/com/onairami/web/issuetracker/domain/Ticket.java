package com.onairami.web.issuetracker.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @SequenceGenerator(name="ticketSeq",sequenceName="seq_tickets", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ticketSeq")
    Long ticketId;
//    @ManyToOne(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
//    @JoinColumn(name = "ticket_creator")
//    User ticketCreator;
//    @ManyToOne(cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
//    @JoinColumn(name = "ticket_assignee")
//    User ticketAssignee;
    Long ticketCreator;
    Long ticketAssignee;
    String ticketSummary;
    String ticketDescription;
    Long ticketSector;
    String ticketStatus;
    Date ticketCreationDate;

    public Ticket() {
    }

    public Ticket(Long ticketId, Long ticketCreator, Long ticketAssignee, String ticketSummary, String ticketDescription, Long ticketSector, String ticketStatus, Date ticketCreationDate) {
        this.ticketId = ticketId;
        this.ticketCreator = ticketCreator;
        this.ticketAssignee = ticketAssignee;
        this.ticketSummary = ticketSummary;
        this.ticketDescription = ticketDescription;
        this.ticketSector = ticketSector;
        this.ticketStatus = ticketStatus;
        this.ticketCreationDate = ticketCreationDate;
    }

    public Ticket(Long ticketCreator, Long ticketAssignee, String ticketSummary, String ticketDescription, Long ticketSector, String ticketStatus, Date ticketCreationDate) {
        this.ticketCreator = ticketCreator;
        this.ticketAssignee = ticketAssignee;
        this.ticketSummary = ticketSummary;
        this.ticketDescription = ticketDescription;
        this.ticketSector = ticketSector;
        this.ticketStatus = ticketStatus;
        this.ticketCreationDate = ticketCreationDate;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public Long getTicketCreator() {
        return ticketCreator;
    }

    public void setTicketCreator(Long ticketCreator) {
        this.ticketCreator = ticketCreator;
    }

    public Long getTicketAssignee() {
        return ticketAssignee;
    }

    public void setTicketAssignee(Long ticketAssignee) {
        this.ticketAssignee = ticketAssignee;
    }

    public String getTicketSummary() {
        return ticketSummary;
    }

    public void setTicketSummary(String ticketSummary) {
        this.ticketSummary = ticketSummary;
    }

    public String getTicketDescription() {
        return ticketDescription;
    }

    public void setTicketDescription(String ticketDescription) {
        this.ticketDescription = ticketDescription;
    }

    public Long getTicketSector() {
        return ticketSector;
    }

    public void setTicketSector(Long ticketSector) {
        this.ticketSector = ticketSector;
    }

    public String getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(String ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    public Date getTicketCreationDate() {
        return ticketCreationDate;
    }

    public void setTicketCreationDate(Date ticketCreationDate) {
        this.ticketCreationDate = ticketCreationDate;
    }
}
