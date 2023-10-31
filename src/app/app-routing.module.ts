import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {BasicOperationsComponent} from "./pages/basic-operations/basic-operations.component";
import {CombOperationsComponent} from "./pages/comb-operations/comb-operations.component";
import { NumberIdentificationComponent } from './pages/number-identification/number-identification.component';
import { AntecesorSucesorComponent } from './pages/antecesor-sucesor/antecesor-sucesor.component';
import { UnidadesDecenasCentenasComponent } from './pages/unidades-decenas-centenas/unidades-decenas-centenas.component';
import { RectaNumericaComponent } from './pages/recta-numerica/recta-numerica.component';
import {SquaresComponent} from "./pages/squares/squares.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'operations/basic', component: BasicOperationsComponent },
  { path: 'operations/combinations', component: CombOperationsComponent },
  { path: 'number-identification', component: NumberIdentificationComponent },
  { path: 'antecesor-sucesor', component: AntecesorSucesorComponent },
  { path: 'unidades-decenas-centenas', component: UnidadesDecenasCentenasComponent },
  { path: 'recta-numerica', component: RectaNumericaComponent },
  { path: "operations/squares", component: SquaresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
