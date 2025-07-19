import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-module.html',
  styleUrls: ['./contact-module.css']
})
export class ContactComponent {
  // Datos del formulario de registro
  registroData = {
    nombre: '',
    email: '',
    telefono: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Datos de contacto/registro:', this.registroData);
    this.router.navigate(['/home']);  // Redirige al home después del envío
  }
}