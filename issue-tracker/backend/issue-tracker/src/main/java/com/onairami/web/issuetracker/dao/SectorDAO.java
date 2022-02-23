package com.onairami.web.issuetracker.dao;

import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.Ticket;
import com.onairami.web.issuetracker.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectorDAO extends JpaRepository<Sector,Long> {

//    List<Sector> findSectorsByUserId(Long userId);
    Sector findSectorBySectorId(Long sectorId);

    @Query(value = "select sector_name from sectors where sector_id = :sector_id", nativeQuery = true)
    String findSectorNameBySectorId(@Param("sector_id") Long sectorId);

    List<Sector> findAll();

    Sector save(Sector sector);

    void delete(Sector sector);
}
