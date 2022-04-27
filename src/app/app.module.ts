import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ViewClientComponent } from './components/view-client/view-client.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ClientsComponent,
    CreateClientComponent,
    ViewClientComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
