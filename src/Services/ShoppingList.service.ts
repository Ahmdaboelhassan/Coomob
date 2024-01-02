import { Injectable } from '@angular/core';
import { Mobile } from 'src/Models/Mobile';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ShopingList: Mobile[] = [];
  AddMobile(mobile: Mobile) {
    this.ShopingList.push(mobile);
  }
  GetList(): Mobile[] {
    return this.ShopingList.slice();
  }
}
