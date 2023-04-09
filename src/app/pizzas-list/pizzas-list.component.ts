import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit{

  menuItems: MenuItem[];
  constructor(private menuService:MenuService){
    this.menuItems= [{
      id: 1,
      name: 'simp',
      description: 'CLASSIC SAUCE, SPECIAL T SAUCE, FRESH MOZARELLA, SHREDDED MOZZARELLA, PARMESAN-ROMANO',
      price: 8.99,
      imagePath: 'https://andpizza.com/wp-content/uploads/2021/01/simp-340x510.jpg'
    }]
  }
  ngOnInit(): void{
    this.menuService.getPlace().subscribe(menuItems=>{
      console.log(menuItems);
    })
  }
}
