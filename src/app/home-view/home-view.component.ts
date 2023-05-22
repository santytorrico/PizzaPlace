import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent{
  menuItems: MenuItem[] = [];
  item: any;
  Id1: string | undefined = '';
  whoAreWe: boolean = false;
  whatWeDo: boolean = false;
  mision: boolean = false;
  contactanos: boolean = false;
  vision: boolean = false;
  equipo: boolean = false;
  constructor(private location: Location, private menuService: MenuService){

  }

  QuienesSomos(){
    this.whoAreWe=true;
  }
  QueHacemos(){
    this.whatWeDo=true;
  }
  OurMission(){
    this.mision=true;
  }
  contactUs(){
    this.contactanos=true;
  }
  OurVision(){
    this.vision=true;
  }
  OurTeam(){
    this.equipo=true;
  }
  goBack(){
    this.location.back();
  }
  getMenu(id:string | undefined){
    this.menuService.findMenuItem(id).then(menu=> this.item = menu.data());


    console.log('este es el resultado',this.menuService.findMenuItem(id));
  }

}
