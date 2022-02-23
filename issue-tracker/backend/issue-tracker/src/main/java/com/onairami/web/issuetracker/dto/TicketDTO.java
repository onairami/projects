package com.onairami.web.issuetracker.dto;

public class TicketDTO {

    private Long ticketId;
    private String ticketStatus;
    private String ticketSummary;
    private UserDTO ticketCreator;

    public TicketDTO(Long ticketId, String ticketStatus, String ticketSummary, UserDTO ticketCreator) {
        this.ticketId = ticketId;
        this.ticketStatus = ticketStatus;
        this.ticketSummary = ticketSummary;
        this.ticketCreator = ticketCreator;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public String getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(String ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    public String getTicketSummary() {
        return ticketSummary;
    }

    public void setTicketSummary(String ticketSummary) {
        this.ticketSummary = ticketSummary;
    }

    public UserDTO getTicketCreator() {
        return ticketCreator;
    }

    public void setTicketCreator(UserDTO ticketCreator) {
        this.ticketCreator = ticketCreator;
    }

    public TicketDTO() {
    }
}
