import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
nombre = 'Esteban' //Esto es una atributo, pero se puede entender como una variable interna del componente app.ts

  saludar (){
    alert('Hola a todos')
  }

  contador = 0
  incrementar (){
    this.contador = this.contador + 1
  }

  mostrarPorConsola (){
    console.log('Contador vale: ' + this.contador)
  }

  productos = [
    {
      nombre: 'producto 1',
      precio: 10,
      id: 1
    },
    {
      nombre: 'producto 2',
      precio: 20,
      id: 2
    },
    {
      nombre: 'producto 3',
      precio: 30,
      id: 3
    },
    {
      nombre: 'producto 4',
      precio: 10,
      id: 4
    },
    {
      nombre: 'producto 5',
      precio: 20,
      id: 5
    },
    {
      nombre: 'producto 6',
      precio: 30,
      id: 6
    }
  ]
}
