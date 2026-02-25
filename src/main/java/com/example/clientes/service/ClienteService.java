package com.example.clientes.service;

import java.util.List;
import com.example.clientes.model.Cliente;

public interface ClienteService {

    Cliente guardar(Cliente cliente);

    List<Cliente> listar();

    Cliente buscarPorId(Long id);

    Cliente actualizar(Long id, Cliente cliente);

    void eliminar(Long id);
}



