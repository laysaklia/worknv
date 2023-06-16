import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscografiaComponent } from './discografia/discografia.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  { path: '', component: HomeComponent , title: 'Home'},
  { path: 'disco', component: DiscografiaComponent , title: 'Discografia'},
  { path: 'sobre', component: SobreComponent, title: 'Sobre nós' },
  { path: 'contato', component: ContatoComponent, title: 'Fale conosco' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
