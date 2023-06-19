import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscografiaComponent } from './discografia/discografia.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent , title: 'Home'},
  { path: 'disco', component: LoginComponent , title: 'Login'},
  { path: 'cadastro', component: DiscografiaComponent, title: 'Cadastre' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
