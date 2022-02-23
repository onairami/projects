package com.onairami.web.issuetracker.service;

import com.onairami.web.issuetracker.dao.SectorDAO;
import com.onairami.web.issuetracker.dao.UserDAO;
import com.onairami.web.issuetracker.domain.Sector;
import com.onairami.web.issuetracker.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SectorServiceImpl implements SectorService{

    @Autowired
    SectorDAO sectorDAO;

    @Autowired
    UserDAO userDAO;

    @Override
    public List<Sector> getUserSectors(Long userId) {

        return null;//sectorDAO.findSectorsByUserId(userId);

    }

    @Override
    public List<User> getSectorUsers(String sectorName) {
        return userDAO.findAllUsersBySectorName(sectorName);
    }

    @Override
    public List<Sector> getSectors() {
        return sectorDAO.findAll();
    }

    @Override
    public List<User> getSectorUsersBySectorId(Long sectorId) {
        return userDAO.findAllUsersBySectorId(sectorId);
    }


}
