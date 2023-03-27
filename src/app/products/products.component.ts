import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }

  addToOrder(menuItem: MenuItem): void {
    this.orderService.addItem(menuItem);
  }
}
