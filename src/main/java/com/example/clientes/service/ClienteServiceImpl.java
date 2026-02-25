package com.example.clientes.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.example.clientes.model.Cliente;
import com.example.clientes.repository.ClienteRepository;

@Service
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository repository;

    public ClienteServiceImpl(ClienteRepository repository) {
        this.repository = repository;
    }

    @Override
    public Cliente guardar(Cliente cliente) {
        return repository.save(cliente);
    }

    @Override
    public List<Cliente> listar() {
        return repository.findAll();
    }

    @Override
    public Cliente buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Cliente actualizar(Long id, Cliente cliente) {
        cliente.setId(id);
        return repository.save(cliente);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}


