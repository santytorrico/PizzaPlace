import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit{
  menuItems: MenuItem | undefined;
  item: any;
  Id1: string | undefined = '';
  constructor(private route: ActivatedRoute, private menuService: MenuService){
      // this.route.queryParams.subscribe(
      //   data => console.log(data)
      // )
      console.log('FIN',this.route.snapshot.paramMap.get('id'))
      this.Id1=this.route.snapshot.paramMap.get('id')?.toString();
  }
  ngOnInit(): void {
    this.getMenu(this.Id1);
  }
  addToCart(){
    console.log('AGREGANDO AL CARRITO.....')
  }

  getMenu(id:string | undefined){
    this.menuService.findMenuItem(id).then(menu=> this.item = menu.data());


    console.log('este es el resultado',this.menuService.findMenuItem(id));
  }
}
