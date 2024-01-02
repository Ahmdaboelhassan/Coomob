import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/Models/Mobile';
import { ShoppingListService } from 'src/Services/ShoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Mobile[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.GetList();
  }
}
