package com.example.clientes.controller;

import com.example.clientes.model.Pais;
import com.example.clientes.repository.PaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/paises")
@CrossOrigin(origins = "http://localhost:4200") // VITAL para la conexión
public class PaisController {
    @Autowired
    private PaisRepository repo;

    @GetMapping
    public List<Pais> listar() {
        return repo.findAll();
    }
}