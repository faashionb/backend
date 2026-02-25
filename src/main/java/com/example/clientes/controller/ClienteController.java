package com.example.clientes.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.clientes.model.Cliente;
import com.example.clientes.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    private final ClienteService service;

    public ClienteController(ClienteService service) {
        this.service = service;
    }

    // ALTA
    @PostMapping
    public Cliente guardar(@RequestBody Cliente cliente) {
        return service.guardar(cliente);
    }

    // CONSULTA
    @GetMapping
    public List<Cliente> listar() {
        return service.listar();
    }

    // BUSCAR POR ID
    @GetMapping("/{id}")
    public Cliente buscar(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    // MODIFICAR
    @PutMapping("/{id}")
    public Cliente actualizar(@PathVariable Long id,
                              @RequestBody Cliente cliente) {
        return service.actualizar(id, cliente);
    }

    // BAJA
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}



