import { Component, inject } from '@angular/core';
import { Post, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  posts : Post[] = [] //Creamos un estado donde guardamos los posteos
  loading: boolean = true //Marcamos que nuestro componente inicia cargando porque aun no se cargaron los posteos (aun no se resolvio la consulta)
  error : string | null = null
  private postService = inject(PostsService) // Inject da el servicio de HTTP Client

  //MENEJO DE PROMESAS O OBSERVABLES
  ngOnInit(){  //Cuando se monta el componente
    let observable = this.postService.getPosts()
    observable.subscribe({
      next: (posts) => {
        // Cuando se carguen se guardan en el estado
        this.posts = posts
        this.loading = false
        // console.log("El observable cambio de estado")
      },
      error :(error) => {
        console.error("el observable fallo en ejecución", error)
        this.error = 'Fallo critico al obtener productos'
        this.loading = false
      }
    }) 
  } 
}

// CONCEPTOS DE ASINCRONIA
