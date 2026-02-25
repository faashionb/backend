import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente, Pais } from '../../models/cliente';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.css'
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  paises: Pais[] = [];
  
  // Variable para el buscador
  textoBusqueda: string = '';
  estaEditando: boolean = false;

  obj: Cliente = { 
    id: undefined,
    nombre: '', 
    apellido: '', 
    email: '', 
    telefono: '', 
    pais: { id: 0, nombre: '' } 
  };

  constructor(private s: ClienteService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.s.listar().subscribe((res: Cliente[]) => this.clientes = res);
    this.s.getPaises().subscribe((res: Pais[]) => this.paises = res);
  }

  // FUNCIÓN DE FILTRADO: Esta es la clave para la búsqueda
  get clientesFiltrados(): Cliente[] {
    return this.clientes.filter(c => 
      c.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
      c.apellido.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }

  guardar(): void {
    if (this.obj.pais.id === 0) {
      alert('Por favor, seleccione un país');
      return;
    }

    if (this.obj.id) {
      this.s.actualizar(this.obj).subscribe(() => {
        alert('Cliente actualizado con éxito');
        this.finalizarAccion();
      });
    } else {
      this.s.crear(this.obj).subscribe(() => {
        alert('Cliente registrado con éxito');
        this.finalizarAccion();
      });
    }
  }

  prepararEditar(c: Cliente): void {
    this.obj = { ...c }; 
    this.estaEditando = true;
  }

  eliminar(cliente: Cliente): void {
    if (cliente.pais.nombre !== 'Argentina') {
      alert('No se puede eliminar: Solo se permiten eliminar clientes de Argentina.');
      return;
    }

    if (cliente.id && confirm(`¿Estás seguro de eliminar a ${cliente.nombre}?`)) {
      this.s.eliminar(cliente.id).subscribe(() => this.cargar());
    }
  }

  finalizarAccion(): void {
    this.cargar();
    this.limpiar();
  }

  limpiar(): void {
    this.estaEditando = false;
    this.obj = { 
      id: undefined, 
      nombre: '', 
      apellido: '', 
      email: '', 
      telefono: '', 
      pais: { id: 0, nombre: '' } 
    };
  }
}