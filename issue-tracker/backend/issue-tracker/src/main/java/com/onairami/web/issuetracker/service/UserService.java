package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.domain.User;
import com.onairami.web.issuetracker.dto.UserDTO;
import com.onairami.web.issuetracker.exception.EtAuthException;

import java.util.List;

public interface UserService {

    String registerUser();

    List<User> getUsers();

    List<Sector> getUserSectors(Long userId);

    List<Ticket> getUserAllowedTickets(Long userId);

    Long getUserId(String username);

    User authenticateUser(String username, String password) throws EtAuthException;

    User getUserByUserId(Long userId);

    UserDTO userToUserDto(User user);

    String getUsernameByUserId(Long userId);
}
