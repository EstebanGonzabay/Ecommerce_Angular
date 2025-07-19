import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-button',
  imports: [],
  templateUrl: './registro-button.html',
  styleUrl: './registro-button.css'
})
export class RegistroButton {
  constructor(private router: Router) {}
  goToRegistro() {
    this.router.navigate(['/contact']);
  }
}
