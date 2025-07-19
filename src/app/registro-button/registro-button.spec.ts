import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="redirectToContact()" class="registro-btn">
      Registrarse
    </button>
  `,
  styles: [`
    .registro-btn {
      padding: 10px 20px;
      background: #4285F4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    .registro-btn:hover {
      background: #3367D6;
    }
  `]
})
export class RegistroButtonComponent {
  constructor(private router: Router) {}

  redirectToContact() {
    this.router.navigate(['/contact']);  // Redirige al componente de contacto (ahora registro)
  }
}