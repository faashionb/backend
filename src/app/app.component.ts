import { Component } from '@angular/core';
import { ClienteComponent } from './components/cliente/cliente.component'; // Ajustá según tu nombre de archivo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  title = 'clientes-frontend';
}