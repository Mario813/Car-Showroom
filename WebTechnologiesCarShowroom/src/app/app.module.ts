import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { ListaveicoliComponent } from './listaveicoli/listaveicoli.component';
import { FiatComponent } from './fiat/fiat.component';
import { OpelComponent } from './opel/opel.component';
import { FordComponent } from './ford/ford.component';
import { AlfaComponent } from './alfa/alfa.component';
import { KiaComponent } from './kia/kia.component';
import { ToyotaComponent } from './toyota/toyota.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactComponent,
    IndexComponent,
    ListaveicoliComponent,
    FiatComponent,
    OpelComponent,
    FordComponent,
    AlfaComponent,
    KiaComponent,
    ToyotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
