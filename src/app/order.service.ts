import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private items: MenuItem[] = [];
  private totalPrice: number = 0;
  private itemCount: number = 0;
  private orderSubject = new BehaviorSubject<MenuItem[]>([]);

  constructor() {}

  addItemToOrder(item: MenuItem): void {
    this.items.push(item);
    this.totalPrice += item.price;
    this.itemCount++;
    this.orderSubject.next(this.items);
  }
  getOrderItems(): MenuItem[] {
    return this.items;
  }
  
  getTotalPrice(): number {
    return this.totalPrice;
  }

  getItemCount(): number {
    return this.itemCount;
  }

  getOrderSubject(): BehaviorSubject<MenuItem[]> {
    return this.orderSubject;
  }
}
