import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { user } from '@angular/fire/auth';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, private orderService: OrderService,private router: Router, private userService:UserService) {}

  ngOnInit(): void {
    this.menuService.getPizzas().subscribe(menuItems=>{
      this.menuItems= menuItems;
    })
  }

  addToOrder(item: MenuItem): void {
    this.orderService.addItemToOrder(item);
  }
  navigateToOrderSummary(): void {
    this.router.navigate(['/OrderSummary']);
  }

  onClickLogout(){
    this.userService.logout() 
    .then(()=>{
      this.router.navigate(["/Login"]);
    })
    .catch(error=> console.log(error))
  }
  
}
