package com.onairami.web.issuetracker.dto;

import java.util.Date;

public class TicketDetailDTO {
    Long ticketId;
    UserDTO ticketCreator;
    UserDTO ticketAssignee;
    String ticketSummary;
    String ticketDescription;
    Long ticketSectorId;
    String ticketSectorName;
    String ticketStatus;
    Date ticketCreationDate;

    public TicketDetailDTO() {
    }

    public TicketDetailDTO(Long ticketId, UserDTO ticketCreator, UserDTO ticketAssignee, String ticketSummary, String ticketDescription, Long ticketSectorId, String ticketSectorName, String ticketStatus, Date ticketCreationDate) {
        this.ticketId = ticketId;
        this.ticketCreator = ticketCreator;
        this.ticketAssignee = ticketAssignee;
        this.ticketSummary = ticketSummary;
        this.ticketDescription = ticketDescription;
        this.ticketSectorId = ticketSectorId;
        this.ticketSectorName = ticketSectorName;
        this.ticketStatus = ticketStatus;
        this.ticketCreationDate = ticketCreationDate;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public UserDTO getTicketCreator() {
        return ticketCreator;
    }

    public void setTicketCreator(UserDTO ticketCreator) {
        this.ticketCreator = ticketCreator;
    }

    public UserDTO getTicketAssignee() {
        return ticketAssignee;
    }

    public void setTicketAssignee(UserDTO ticketAssignee) {
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

    public Long getTicketSectorId() {
        return ticketSectorId;
    }

    public void setTicketSectorId(Long ticketSectorId) {
        this.ticketSectorId = ticketSectorId;
    }

    public String getTicketSectorName() {
        return ticketSectorName;
    }

    public void setTicketSectorName(String ticketSectorName) {
        this.ticketSectorName = ticketSectorName;
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
