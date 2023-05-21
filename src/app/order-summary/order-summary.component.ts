import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  orderItems: MenuItem[] = [];
  totalPrice: number = 0;
  itemCount: number = 0;
  email: string = '';

  constructor(private orderService: OrderService,private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.getOrderItems();
    this.getItemCount();
    this.orderService.items.subscribe(orderItems =>{
      this.orderItems = orderItems;
    });
    this.getTotalPrice();
    console.log(this.getTotalPrice())
  }

  removeFromOrder(index: number) {
    this.orderService.deleteItem(index);
    this.getItemCount();
    this.getTotalPrice();
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

  confirmOrder(): void {
    this.userService.stateUser().subscribe( res => {
      console.log('Email: ', res?.email);
      this.email= res?.email ?? '';
      this.orderService.confirmOrder(this.email);
      this.getItemCount();
      this.getTotalPrice();
    })
    // Additional logic or navigation can be added here after confirming the order
  }

  navigateToProducts(): void {
    this.router.navigate(['/Products']);
  }
  
}
