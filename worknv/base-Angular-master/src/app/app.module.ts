import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatosComponent } from './contatos/contatos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicoService } from './service/servico.service';
import { DiscografiaComponent } from './discografia/discografia.component';
FormsModule
HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ContatosComponent,
    RodapeComponent,
    MenuComponent,
    DiscografiaComponent
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
