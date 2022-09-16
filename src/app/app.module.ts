import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './ventas/pages/home/home.component';
import { NoticiasComponent } from './ventas/pages/noticias/noticias.component';
import { EventosComponent } from './ventas/pages/eventos/eventos.component';
import { NosotrosComponent } from './ventas/pages/nosotros/nosotros.component';
import { DirectorioComponent } from './ventas/pages/directorio/directorio.component';
import { ServiciosComponent } from './ventas/pages/servicios/servicios.component';
import { ContactanosComponent } from './ventas/pages/contactanos/contactanos.component';
import { CariuselComponent } from './shared/components/cariusel/cariusel.component';


import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    NoticiasComponent,
    EventosComponent,
    NosotrosComponent,
    DirectorioComponent,
    ServiciosComponent,
    ContactanosComponent,
    CariuselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
