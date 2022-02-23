package com.onairami.web.issuetracker.dto;

import java.util.Date;

public class ReplyDTO {

    private Long replyTicket;
    private String replyAuthor;
    private String replyText;
    private Date replyDate;

    public ReplyDTO(Long replyTicket, String replyAuthor, String replyText, Date replyDate) {
        this.replyTicket = replyTicket;
        this.replyAuthor = replyAuthor;
        this.replyText = replyText;
        this.replyDate = replyDate;
    }

    public Long getReplyTicket() {
        return replyTicket;
    }

    public void setReplyTicket(Long replyTicket) {
        this.replyTicket = replyTicket;
    }

    public String getReplyAuthor() {
        return replyAuthor;
    }

    public void setReplyAuthor(String replyAuthor) {
        this.replyAuthor = replyAuthor;
    }

    public String getReplyText() {
        return replyText;
    }

    public void setReplyText(String replyText) {
        this.replyText = replyText;
    }

    public Date getReplyDate() {
        return replyDate;
    }

    public void setReplyDate(Date replyDate) {
        this.replyDate = replyDate;
    }
}
