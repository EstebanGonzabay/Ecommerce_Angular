import { Component } from '@angular/core';

// FormsModulo es un modeulo que nos los provee angular para poder manejar formularios
import { FormsModule } from '@angular/forms';


// La interfaz nos permite definir un schema
interface Message {
  author: string,
  id: number,
  text: string
}

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

  // Estoy tipando explicitamente que mi estadoc de messages es un array donde cada elemento es un objeto que cumple con la interfaz Message

  messages : Message[] = [
    
  //   {
  //     author: 'Jhon Dow',
  //     text: 'Hello world',
  //     id: 1
  //   },
  //   {
  //     author: 'Mary Doe',
  //     text: 'Hello Doe',
  //     id: 2
  //   },
  //   {
  //     author: 'Jhon Juan',
  //     text: 'World',
  //     id: 3
  //   }
  ]

  enviarMensaje (){
    console.log("Mensaje enviado")
    console.log(this.form_state)
  }
  form_state = {
    author: '',
    Text: ''
  }
}



/* 
typescript tiene inferencia de datos, esto  significa que puede tiparse sin necesidad de ser explicitos:
EJ:
let nombre = 'pepe'  // TypeScript inferira que el type de nuestra variable es string, NO FUE NECESARIO ACALARARLO
*/
