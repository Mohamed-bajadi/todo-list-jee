package com.example.demo.dao;

import com.example.demo.bean.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EtudiantDao extends JpaRepository <Etudiant,Long> {
    Etudiant findByCode(String code);

@Transactional
    int deleteByCode(String code);


    List<Etudiant> findByFirstnameAndLastname(String firstname,String lastname);


    int deleteByAge(int age);
}
