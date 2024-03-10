package com.example.demo.ws.converter;

import com.example.demo.bean.Etudiant;
import com.example.demo.ws.dto.EtudiantDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
@Component
public class EtudiantConverter {
    public Etudiant toBean(EtudiantDto dto){
        Etudiant bean  = new Etudiant();
        bean.setId(dto.getId());
        bean.setCode(dto.getCode());
        bean.setFirstname(dto.getFirstname());
        bean.setLastname(dto.getLastname());
        bean.setAge(dto.getAge());
        return  bean;
    }
    public EtudiantDto toDto(Etudiant bean){
        EtudiantDto dto  = new EtudiantDto();
        dto.setId(bean.getId());
        dto.setCode(bean.getCode());
        dto.setFirstname(bean.getFirstname());
        dto.setLastname(bean.getLastname());
        dto.setAge(bean.getAge());
        return dto;
    }
    public List<Etudiant> toBean(List<EtudiantDto> dtos){
        return dtos.stream().map(e->toBean(e)).collect(Collectors.toList());

    }
    public List<EtudiantDto> toDto(List<Etudiant> beans){
        return beans.stream().map(this::toDto).collect(Collectors.toList());
    }

}
