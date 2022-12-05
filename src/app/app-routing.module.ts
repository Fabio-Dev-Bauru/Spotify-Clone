import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 export const AppRotas: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
 ]


 @NgModule({
  imports: [RouterModule.forRoot(AppRotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
