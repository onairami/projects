package com.onairami.web.issuetracker.domain;

import javax.persistence.*;

@Entity
@Table(name = "sectors")
public class Sector {

    @Id
    @SequenceGenerator(name="sectorSeq",sequenceName="seq_sectors", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="sectorSeq")
    private Long sectorId;
    private String sectorName;
    private String sectorDescription;

    public Sector() {
    }

    public Sector(Long sectorId, String sectorName, String sectorDescription) {
        this.sectorId = sectorId;
        this.sectorName = sectorName;
        this.sectorDescription = sectorDescription;
    }

    public Sector(String sectorName, String sectorDescription) {
        this.sectorName = sectorName;
        this.sectorDescription = sectorDescription;
    }

    public Long getSectorId() {
        return sectorId;
    }

    public void setSectorId(Long sectorId) {
        this.sectorId = sectorId;
    }

    public String getSectorName() {
        return sectorName;
    }

    public void setSectorName(String sectorName) {
        this.sectorName = sectorName;
    }

    public String getSectorDescription() {
        return sectorDescription;
    }

    public void setSectorDescription(String sectorDescription) {
        this.sectorDescription = sectorDescription;
    }
}
