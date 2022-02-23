package com.onairami.web.issuetracker.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users_sectors")
public class UserSector {

    @Id
    Long userId;
    Long sectorId;

    public UserSector() {
    }

    public UserSector(Long userId, Long sectorId) {
        this.userId = userId;
        this.sectorId = sectorId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getSectorId() {
        return sectorId;
    }

    public void setSectorId(Long sectorId) {
        this.sectorId = sectorId;
    }
}
