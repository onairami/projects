package com.onairami.web.issuetracker.Table;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "users_sectors")
public class UsersSectors {
    @Id
    Long id;
    Long userId;
    Long sectorId;

    public UsersSectors(Long userId, Long sectorId) {
        this.userId = userId;
        this.sectorId = sectorId;
    }
}
