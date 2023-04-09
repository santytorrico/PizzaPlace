import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from './menu-item';
import { Firestore ,collection, addDoc, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private firestore:Firestore){}

  addMenuItem(menuItem:MenuItem){
    const  menuItemRef =collection(this.firestore, 'menuItems');
    return addDoc(menuItemRef, menuItem);
  }
  getPlace(): Observable<MenuItem[]>{
    const  menuItemRef =collection(this.firestore, 'menuItems');
    return collectionData(menuItemRef, {idField : 'id'}) as Observable<MenuItem[]>;
  }
}
