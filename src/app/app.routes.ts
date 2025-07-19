import { Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';
import { ContactComponent } from './contact-module/contact-module';
import { RegistroButton } from './registro-button/registro-button';

export const routes: Routes = [
    {
        path: 'home',     
        component: Products
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/:product_id',
        component: ProductDetail
    },{
        path: 'contact', 
        component: ContactComponent 
    },
    // {
    //     path: 'registro',
    //     component: RegistroButton
    // },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
