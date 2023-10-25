import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BasicOperationsComponent } from './pages/basic-operations/basic-operations.component';
import {MatIconModule} from "@angular/material/icon";
import { ButtonComponent } from './components/button/button.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import {FormsModule} from "@angular/forms";
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CombOperationsComponent } from './pages/comb-operations/comb-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BasicOperationsComponent,
    ButtonComponent,
    NumbersComponent,
    SnackBarComponent,
    CombOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
