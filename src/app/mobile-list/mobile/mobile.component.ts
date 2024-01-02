import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Mobile } from 'src/Models/Mobile';
import { ShoppingListService } from 'src/Services/ShoppingList.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  @Input() Mobile: Mobile;
  @Input() MobileIndex: Mobile;
  startEditing: boolean = false;
  constructor(
    private shoppinglist: ShoppingListService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let editMode = this.currentRoute.snapshot.queryParams['editMode'];
    if (editMode === '1') {
      this.startEditing = true;
    }
  }

  AddToShoppingCart() {
    this.shoppinglist.AddMobile(this.Mobile);
    this.router.navigate(['/shoppinglist']);
  }
}
