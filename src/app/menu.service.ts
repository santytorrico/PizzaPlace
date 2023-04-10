import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from './menu-item';
import { Firestore ,collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private firestore:Firestore){}

  addMenuItem(menuItem:MenuItem){
    const  menuItemsRef =collection(this.firestore, 'menuItems');
    return addDoc(menuItemsRef, menuItem);
  }
  getPizzas(): Observable<MenuItem[]>{
    const  menuItemRef =collection(this.firestore, 'menuItems');
    return collectionData(menuItemRef, {idField : 'id'}) as Observable<MenuItem[]>;
  }
  deleteMenuItem(menuItem:MenuItem){
    const itemDocRef = doc(this.firestore,`menuItems/${menuItem.id}`);
    return deleteDoc(itemDocRef);
  }
}
