package com.onairami.web.issuetracker.dao;

import com.onairami.web.issuetracker.domain.Reply;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReplyDAO extends JpaRepository<Reply,Long> {

    Page<Reply> findRepliesByReplyTicket(Long ticketId, Pageable pageable);

    Reply save(Reply reply);
}
