import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private cartItems: MenuItem[] = [];
  private totalPrice: number = 0;
  private orderSubject: BehaviorSubject<MenuItem[]>;

  constructor() {
    this.orderSubject = new BehaviorSubject<MenuItem[]>([]);

  }
  public get items(){
    return this.orderSubject.asObservable();
  }

  addItemToOrder(item: MenuItem): void {
    this.cartItems.push(item);
    this.totalPrice += item.price;
    this.orderSubject.next(this.cartItems);
  }
  deleteItem(index: number){
    this.cartItems.splice(index, 1);
    this.orderSubject.next(this.cartItems);
  }
  getOrderItems(): MenuItem[] {
    return this.cartItems;
  }
  
  getTotalPrice(): number {
    return this.totalPrice;
  }

  getItemCount(): number {
    return this.cartItems.length;
  }

  getOrderSubject(): BehaviorSubject<MenuItem[]> {
    return this.orderSubject;
  }
}
