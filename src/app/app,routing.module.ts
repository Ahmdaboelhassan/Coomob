import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';

const AppRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'add', component: MobileEditComponent },
  { path: 'edit/:id', component: MobileEditComponent },
  { path: 'mobiles/edit', component: MobileListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
