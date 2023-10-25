import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {BasicOperationsComponent} from "./pages/basic-operations/basic-operations.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'operations/basic', component: BasicOperationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
