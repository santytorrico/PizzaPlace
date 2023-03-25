import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      name: 'Newg',
      description: 'Classic tomato Sauce, fresh mozzarella, special T sauce, basil',
      price: 8.99,
      imagePath: 'assets/images/newg-1-340x510.jpg'
    },
    {
      name: 'Buffalo66',
      description: 'Spicy tomato sauce, fresh mozzarella, special T sauce, pepperoni, pickled fresno chilis, red pepper flakes',
      price: 10.99,
      imagePath: 'assets/images/buffalo66-340x510.jpg'
    },
    {
      name: 'Simp',
      description: 'CLASSIC SAUCE, SPECIAL T SAUCE, FRESH MOZARELLA, SHREDDED MOZZARELLA, PARMESAN-ROMANO',
      price: 6.99,
      imagePath: 'assets/images/simp-340x510.jpg'
    },
    {
      name: 'BLK',
      description: 'CLASSIC TOMATO SAUCE, BASIL,FRESH MOZZARELLA, GRILLED ONION, CHICKEN, CRUSHED RED PEPPER, CRACKED BLACK PEPPER, GARLIC PUREE',
      price: 10.99,
      imagePath: 'assets/images/blk-340x510.png'
    }
    // Add more menu items here
  ];

  getMenuItems(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }
}
