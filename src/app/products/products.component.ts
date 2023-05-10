import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  menuItems: MenuItem[] = [];
  // const auth = getAuth();

  constructor(private menuService: MenuService, private orderService: OrderService,private router: Router, private userService:UserService,) {}

  async ngOnInit() {
    this.menuService.getPizzas().subscribe(menuItems=>{
      this.menuItems= menuItems;
    })
  }

  addToOrder(item: MenuItem) {
    this.orderService.addItemToOrder(item);
  }
  navigateToOrderSummary(): void {
    this.router.navigate(['/OrderSummary']);
  }
  // onAuthStateChanged(auth,(user)=>{
  //   if (user){
  //     const uid = user.uid;
  //   }else{

  //   }
  // });

  onClickLogout(){
    this.userService.logout() 
    .then(()=>{
      this.router.navigate(["/Login"]);
    })
    .catch(error=> console.log(error))
  }
  
}
