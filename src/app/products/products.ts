import { Component, inject } from '@angular/core';
// import { Product } from '../product/product';
import { ProductInterface, ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { RegistroButton } from '../registro-button/registro-button';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RegistroButton],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: ProductInterface[] = []
  loading: boolean = true

  private productsService = inject(ProductsService)
  ngOnInit(){
    const products_observable = this.productsService.getProducts()
    products_observable.subscribe(
      {
        next: (products) => {
          this.products = products
          this.loading = false
        },
        error: (error) => {
          console.log(error)
        }
      }

    )
  }


}
