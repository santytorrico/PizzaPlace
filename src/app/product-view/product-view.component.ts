import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  // menuItems: MenuItem[] = [];
  // mItem: MenuItem | undefined;
  // enuSelected: MenuItem;
  constructor(private route: ActivatedRoute, private menuService: MenuService, private orderService: OrderService) { }

  async ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('menuItemId'));

    // this.menuService.getPizzas().subscribe(menuItems => {
    //   this.menuItems = menuItems
    // })

    // this.menuService.getPizzas().forEach(menuItems => {
    //   this.menuItems = menuItems
    // })

    // this.mItem = this.menuItems.find(menuItems => menuItems.id === productIdFromRoute);
    // this.menuService.getPizzas().subscribe(menuItems => {
    //   this.menuItems = menuItems.find(menuItems => menuItems.id === productIdFromRoute);
    // }) 
    // this.mItem = this.menuItems.find(menuItems => menuItems.id === productIdFromRoute);
    // this.menuService.getPizzas().subscribe(menuItems => {
    //   this.menuItems = menuItems;
    // }) 
  }

}
