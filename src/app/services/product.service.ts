import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  // state managing the product list
  private products = signal<Product[]>([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 150,
      category: 'Electronics',
      inventoryStatus: 'In Stock',
      rating: 4,
      imageURL: 'https://picsum.photos/id/101/800/800',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699,
      category: 'Mobile Phones',
      inventoryStatus: 'In Stock',
      rating: 5,
      imageURL: 'https://picsum.photos/id/102/800/800',
    },
    {
      id: 3,
      name: 'Leather Wallet',
      price: 45,
      category: 'Accessories',
      inventoryStatus: 'Out of Stock',
      rating: 3,
      imageURL: 'https://picsum.photos/id/103/800/800',
    },
    {
      id: 4,
      name: 'Gaming Laptop',
      price: 1200,
      category: 'Computers',
      inventoryStatus: 'In Stock',
      rating: 4.5,
      imageURL: 'https://picsum.photos/id/104/800/800',
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 99,
      category: 'Audio',
      inventoryStatus: 'In Stock',
      rating: 4,
      imageURL: 'https://picsum.photos/id/10/800/800',
    },
    {
      id: 6,
      name: 'Fitness Tracker',
      price: 89,
      category: 'Wearable Tech',
      inventoryStatus: 'In Stock',
      rating: 3.5,
      imageURL: 'https://picsum.photos/id/106/800/800',
    },
    {
      id: 7,
      name: '4K Smart TV',
      price: 899,
      category: 'Home Electronics',
      inventoryStatus: 'In Stock',
      rating: 4.8,
      imageURL: 'https://picsum.photos/id/107/800/800',
    },
    {
      id: 8,
      name: 'Noise Cancelling Earbuds',
      price: 120,
      category: 'Audio',
      inventoryStatus: 'Out of Stock',
      rating: 4.2,
      imageURL: 'https://picsum.photos/id/108/800/800',
    },
    {
      id: 9,
      name: 'Digital Camera',
      price: 550,
      category: 'Photography',
      inventoryStatus: 'In Stock',
      rating: 4.7,
      imageURL: 'https://picsum.photos/id/109/800/800',
    },
    {
      id: 10,
      name: 'Electric Kettle',
      price: 35,
      category: 'Home Appliances',
      inventoryStatus: 'In Stock',
      rating: 4,
      imageURL: 'https://picsum.photos/id/110/800/800',
    },
  ]);

  // state managing the cart
  private cart = signal<CartItem[]>([]);

  getCart = computed(() => this.cart());
  getCartQuantity = computed(() =>
    this.cart().reduce((total, item) => total + item.quantity, 0)
  );
  // methods
  getProducts = computed(() => this.products());

  addToCart(product: Product) {
    this.cart.update((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  }

  updateCartQuantity(productId: number, newQuantity: number) {
    this.cart.update((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

  deleteProduct(CartItem: CartItem) {
    this.cart.update((prevCart) =>
      prevCart.filter((item) => item.product.id !== CartItem.product.id)
    );
  }
}
