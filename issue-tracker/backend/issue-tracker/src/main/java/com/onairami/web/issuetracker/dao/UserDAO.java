package com.onairami.web.issuetracker.dao;

import com.onairami.web.issuetracker.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {

//    String createUser();

//    @Procedure("add_user_to_sector")
    @Modifying
    @Transactional
    @Query(value = "insert into users_sectors us (user_id, sector_id) values (:user_id, :sector_id)", nativeQuery = true)
    void addUserToSector(@Param("user_id") Long userId, @Param("sector_id")Long sectorId);

     @Modifying
     @Transactional
     @Query(value="delete from users_sectors where user_id = :user_id", nativeQuery = true)
     void removeUserFromSector(@Param("user_id") Long userId);

    @Query("select us.sectorId from UsersSectors us where us.userId = :user_id")
    List<Long> findSectorsIdsByUserId(@Param("user_id") Long userId);

    @Query("select s.userId from User s where s.username = :username")
    Long findUserIdByUsername(@Param("username") String username);

    User findByUsername(String username);

//    @Query("select s.userId, s.username, s.firstName, s.lastName, s.password from User s where s.userId = :user_id")
    User findByUserId(/*@Param("user_id")*/ Long userId);

//    List<User> getAllUsers();

    @Query(value="select u.* from users u join users_sectors us on u.user_id = us.user_id " +
            "join sectors s on us.sector_id = s.sector_id " +
            "where s.sector_name = :sectorname " +
            "order by u.user_username asc",
            nativeQuery = true)
    List<User> findAllUsersBySectorName(@Param("sectorname") String sectorName);


    @Query(value="select u.* from users u join users_sectors us on u.user_id = us.user_id " +
            "join sectors s on us.sector_id = s.sector_id " +
            "where s.sector_id = :sector_id " +
            "order by u.user_username asc",
            nativeQuery = true)
    List<User> findAllUsersBySectorId(@Param("sector_id") Long sectorId);

    @Query(value="select user_username from users where user_id = :user_id",
            nativeQuery = true)
    String findUsernameByUserId(@Param("user_id") Long userId);

    User save(User user);

    void delete(User user);
}
