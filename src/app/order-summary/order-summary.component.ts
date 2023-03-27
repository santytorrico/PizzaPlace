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
    this.getTotalPrice();
    this.getItemCount();
    this.getOrderSubject();
  }

  getOrderItems(): void {
    this.orderItems = this.orderService.getItems();
  }

  getTotalPrice(): void {
    this.totalPrice = this.orderService.getTotalPrice();
  }

  getItemCount(): void {
    this.itemCount = this.orderService.getItemCount();
  }

  getOrderSubject(): void {
    this.orderService.getOrderSubject().subscribe(items => this.orderItems = items);
  }
}
