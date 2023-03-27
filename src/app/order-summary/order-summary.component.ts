import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.items = this.orderService.getItems();
  }
}
