package com.example.demo.ws.facade;

import com.example.demo.bean.Etudiant;
import com.example.demo.service.EtudiantService;
import com.example.demo.ws.converter.EtudiantConverter;
import com.example.demo.ws.dto.EtudiantDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiant/")
public class EtudiantWs {
    @GetMapping("code/{code}")
    public EtudiantDto findByCode(@PathVariable String code) {
        Etudiant etudiant = service.findByCode(code);
        return converter.toDto(etudiant);
    }

    @DeleteMapping("code/{code}")
    @Transactional
    public int deleteById(@PathVariable String code) {
        return service.deleteByCode(code);
    }

    @GetMapping("firsname/{firstname}/lastname/{lastname}")
    public List<EtudiantDto> findByFirstnameAndLastname(@PathVariable String firstname, @PathVariable String lastname) {
        List<Etudiant> etudiant = service.findByFirstnameAndLastname(firstname, lastname);
        return converter.toDto(etudiant);
    }

    @DeleteMapping("age/{age}")
    @Transactional
    public int deleteByAge(@PathVariable int age) {
        return service.deleteByAge(age);
    }

    @PostMapping
    public int save(@RequestBody EtudiantDto e) {
        Etudiant etudiant = converter.toBean(e);
        return service.save(etudiant);
    }

@PutMapping
    public int update(@RequestBody EtudiantDto e) {
        Etudiant etudiant = converter.toBean(e);
        return service.update(etudiant);
    }

    @GetMapping
    public List<EtudiantDto> findAll() {

        List<Etudiant> etudiants = service.findAll();
        return converter.toDto(etudiants);
    }

    @Autowired
    private EtudiantService service;
    @Autowired
    private EtudiantConverter converter;

}
