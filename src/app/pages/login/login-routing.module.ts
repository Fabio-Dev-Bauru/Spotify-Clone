import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const LoginRotas: Routes = [
  {
    path: '', component: LoginComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(LoginRotas)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
