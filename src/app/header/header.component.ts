import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/Services/ShoppingList.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentChecked {
  shoppingListCount: number;

  constructor(private Shoppinglist: ShoppingListService) {}

  ngAfterContentChecked(): void {
    this.shoppingListCount = this.Shoppinglist.GetList().length;
  }
  ShowDropDown() {
    let dropdown = document.getElementById('nav-dropdown');
    dropdown.classList.toggle('show');
  }
}
