package com.onairami.web.issuetracker.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="ticket_replies")
public class Reply {

    @Id
    @SequenceGenerator(name="replySeq", sequenceName = "seq_replies", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "replySeq")
    private Long replyId;
    private Long replyTicket;
    private Long replyAuthor;
    private String replyText;
    private Date replyDate;

    public Reply() {
    }

    public Reply(Long replyId, Long replyTicket, Long replyAuthor, String replyText, Date replyDate) {
        this.replyId = replyId;
        this.replyTicket = replyTicket;
        this.replyAuthor = replyAuthor;
        this.replyText = replyText;
        this.replyDate = replyDate;
    }

    public Reply(Long replyTicket, Long replyAuthor, String replyText, Date replyDate) {
        this.replyTicket = replyTicket;
        this.replyAuthor = replyAuthor;
        this.replyText = replyText;
        this.replyDate = replyDate;
    }

    public Long getReplyId() {
        return replyId;
    }

    public void setReplyId(Long replyId) {
        this.replyId = replyId;
    }

    public Long getReplyTicket() {
        return replyTicket;
    }

    public void setReplyTicket(Long replyTicket) {
        this.replyTicket = replyTicket;
    }

    public Long getReplyAuthor() {
        return replyAuthor;
    }

    public void setReplyAuthor(Long replyAuthor) {
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
