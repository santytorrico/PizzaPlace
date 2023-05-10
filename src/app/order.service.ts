import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './menu-item';
import { OrderItem } from './order-item';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private cartItems: MenuItem[] = [];
  private totalPrice: number = 0;
  private orderSubject: BehaviorSubject<MenuItem[]>;

  constructor(private firestore:Firestore) {
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
    return Number(this.totalPrice);
  }

  getItemCount(): number {
    return this.cartItems.length;
  }

  getOrderSubject(): BehaviorSubject<MenuItem[]> {
    return this.orderSubject;
  }

  confirmOrder(){
    const orderRef= collection(this.firestore, 'orders');
    const newOrder = {
      items: this.cartItems,
      totalPrice: Number(this.totalPrice),
      status: 'Pending'
    };
    addDoc(orderRef, newOrder);

    this.cartItems = [];
    this.totalPrice = 0;
    this.orderSubject.next(this.cartItems);
  }
  getOrders(): Observable<OrderItem[]> {
    const orderRef = collection(this.firestore, 'orders');
    return collectionData(orderRef, { idField: 'id' }) as Observable<OrderItem[]>;
  }
  
}
