export interface Pais {
  id: number;
  nombre: string;
}

export interface Cliente {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  pais: Pais;
}