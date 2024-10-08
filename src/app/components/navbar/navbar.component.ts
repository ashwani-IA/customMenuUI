import { Component, OnInit, effect } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ProductService } from '../../services/product.service';
import { cartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MegaMenuModule,
    ButtonModule,
    CommonModule,
    AvatarModule,
    cartComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  quantity = 0;
  constructor(private productService: ProductService) {
    effect(() => {
      this.quantity = this.productService.getCartQuantity();
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'nav Item',
      },
      {
        label: 'nav Item',
        root: true,
      },
    ];
  }
  showCart: boolean = false;
  togglecart() {
    this.showCart = !this.showCart;
  }
}
