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
import { NumberIdentificationComponent } from './pages/number-identification/number-identification.component';
import { MatMenuModule } from '@angular/material/menu';
import { AntecesorSucesorComponent } from './pages/antecesor-sucesor/antecesor-sucesor.component';
import { UnidadesDecenasCentenasComponent } from './pages/unidades-decenas-centenas/unidades-decenas-centenas.component';
import { RectaNumericaComponent } from './pages/recta-numerica/recta-numerica.component';
import {MatButtonModule} from "@angular/material/button";
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SquaresComponent } from './pages/squares/squares.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BasicOperationsComponent,
    ButtonComponent,
    NumbersComponent,
    SnackBarComponent,
    CombOperationsComponent,
    NumberIdentificationComponent,
    AntecesorSucesorComponent,
    UnidadesDecenasCentenasComponent,
    RectaNumericaComponent,
    DialogComponent,
    SquaresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
