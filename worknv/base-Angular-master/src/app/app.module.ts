import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicoService } from './service/servico.service';
import { DiscografiaComponent } from './discografia/discografia.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
FormsModule
HttpClientModule

@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   DiscografiaComponent,
   RodapeComponent,
   NavbarComponent,
   LoginComponent,
   PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
     ServicoService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
