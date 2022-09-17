import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api


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

import {StyleClassModule} from 'primeng/styleclass';

import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MenubarModule} from 'primeng/menubar';
import {ContextMenuModule} from 'primeng/contextmenu';

import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { TabViewModule } from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from 'primeng/scrollpanel';



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
    AccordionModule,
    ButtonModule,
    StyleClassModule,
    FormsModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    SelectButtonModule,
    MenubarModule,
    ContextMenuModule,
    AvatarModule,
    AvatarGroupModule,
    TabViewModule,
    CheckboxModule,
    TabMenuModule,
    MenuModule,
    ScrollTopModule,
    ScrollPanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
