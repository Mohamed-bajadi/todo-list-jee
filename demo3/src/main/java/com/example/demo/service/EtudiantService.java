package com.example.demo.service;

import com.example.demo.bean.Etudiant;
import com.example.demo.dao.EtudiantDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EtudiantService {
    public Etudiant findByCode(String code) {
        return dao.findByCode(code);
    }
@Transactional
    public int deleteByCode(String code) {
        return dao.deleteByCode(code);
    }

    public List<Etudiant> findByFirstnameAndLastname(String firstname, String lastname) {
        return dao.findByFirstnameAndLastname(firstname, lastname);
    }
@Transactional
    public int deleteByAge(int age) {
        return dao.deleteByAge(age);
    }

    public int save(Etudiant e) {
        if (findByCode(e.getCode()) != null){
            return -1;
        }
        if(e.getFirstname()==null || e.getLastname()==null){
            return -2;
        }
        dao.save(e);
        return 1 ;
    }

    public List<Etudiant> findAll() {
        return dao.findAll();
    }
@Autowired
    private EtudiantDao dao;

    public int update(Etudiant e) {

        if (findByCode(e.getCode()) == null){
            return -1;
        }
        dao.save(e);
        return 1 ;
    }
}
