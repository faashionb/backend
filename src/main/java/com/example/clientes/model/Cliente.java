package com.example.clientes.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Esta línea evita que se reemplacen los registros
    private Long id;

    private String nombre;
    private String apellido;
    private String email;
    private String telefono; // Campo agregado según tu requerimiento

    @ManyToOne // Relación con la tabla paises
    @JoinColumn(name = "id_pais") // Asegurate que este nombre coincida con tu FK en la DB
    private Pais pais;

    // Constructor vacío (obligatorio para JPA)
    public Cliente() {
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }
}

