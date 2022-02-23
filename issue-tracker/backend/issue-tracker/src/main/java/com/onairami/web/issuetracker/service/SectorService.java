package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface SectorService {

    List<Sector> getUserSectors(Long userId);

    List<User> getSectorUsers(String sectorName);

    List<Sector> getSectors();

    List<User> getSectorUsersBySectorId(Long sectorId);
}
