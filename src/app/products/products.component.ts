import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }
}