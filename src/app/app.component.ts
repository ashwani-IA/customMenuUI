import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { cartComponent } from './components/cart/cart.component';
import { ButtonModule } from 'primeng/button';
import { productsComponent } from './components/products/products.component';
import { sidePanelComponent } from './components/custom-panel/custom-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ButtonModule,
    productsComponent,
    cartComponent,
    sidePanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
