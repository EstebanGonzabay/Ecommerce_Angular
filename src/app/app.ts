import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';

// Un componnete es un conjunto de HTML, JS, CSS

@Component({
  selector: 'app-root', //Es el nombre con el que despues podremos instanciar a nuestro componente
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',//Direccion de donde estara el HTML de nuestro componente
  styleUrl: './app.css'
})
export class App {
  
}
