import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  whoAreWe: boolean = false;
  whatWeDo: boolean = false;
  mision: boolean = false;
  contactanos: boolean = false;
  vision: boolean = false;
  equipo: boolean = false;
  constructor(private location: Location){

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

}
