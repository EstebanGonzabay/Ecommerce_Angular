import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Posts } from './posts/posts';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';

// Queremos hacer una ruta para una mensajeria tipo wp o chatbot
// Ejemplo: /chat
export const routes: Routes = [
    {
        path: 'chat', //Direccion de la ruta
        component: Chat //Componente que se va a renderizar cuando el cliente entre en la ruta
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'post',
        component: Posts
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/:product_id',
        component: ProductDetail
    }
];
