package com.onairami.web.uni.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_roles")
public class UserRoles {

    @Id
    Integer id;
    Long userId;
    Long roleId;
}
