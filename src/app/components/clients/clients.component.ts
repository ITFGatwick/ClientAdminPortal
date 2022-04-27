import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IClient } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<IClient[]> | null = null;

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clients$ = this.clientsService.getClients();
  }
}
