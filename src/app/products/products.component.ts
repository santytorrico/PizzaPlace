import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, private orderService: OrderService,private router: Router) {}

  // ngOnInit(): void {
  //   this.getMenuItems();
  // }

  // getMenuItems(): void {
  //   this.menuService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  // }
  addToOrder(item: MenuItem): void {
    this.orderService.addItemToOrder(item);
  }
  navigateToOrderSummary(): void {
    this.router.navigate(['/OrderSummary']);
  }
}
