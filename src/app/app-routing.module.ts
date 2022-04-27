import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateClientComponent } from './components/create-client/create-client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ViewClientComponent } from './components/view-client/view-client.component';

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "clients/create", component: CreateClientComponent },
  { path: "clients/:id", component: ViewClientComponent },
  { path: "**", redirectTo: "clients" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
