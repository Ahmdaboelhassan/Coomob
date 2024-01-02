import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile-list/mobile/mobile.component';
import { AppRoutingModule } from './app,routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    MobileListComponent,
    MobileComponent,
    MobileEditComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
