import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  orderItems: MenuItem[] = [];
  totalPrice: number = 0;
  itemCount: number = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrderItems();
    this.getItemCount();
    this.getOrderSubject();
    this.getTotalPrice();
    console.log(this.getTotalPrice())
  }

  getOrderItems(): void {
    this.orderItems = this.orderService.getOrderItems();
  }

  getTotalPrice(): void {
    let total = 0;
    this.orderItems.forEach(item => {
      total += Number(item.price);
    });
    this.totalPrice = total;
  }
  


  getItemCount(): void {
    this.itemCount = this.orderService.getItemCount();
  }

  getOrderSubject(): void {
    this.orderService.getOrderSubject().subscribe(items => this.orderItems = items);
  }
  
}
