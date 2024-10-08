import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../models/cart-item';
import { effect } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
  imports: [
    DataViewModule,
    ButtonModule,
    TagModule,
    CommonModule,
    InputNumberModule,
    FormsModule,
  ],
})
export class cartComponent {
  cartItems: CartItem[] = [];
  cartCount: number = 0;

  constructor(private productService: ProductService) {
    effect(() => {
      this.cartItems = this.productService.getCart();
      this.cartCount = this.productService.getCartQuantity();
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
  deleteProduct(cartItem: CartItem) {
    this.productService.deleteProduct(cartItem);
  }

  updateQuantity(item: CartItem, newQuantity: number) {
    this.productService.updateCartQuantity(item.product.id, newQuantity);
  }
}
