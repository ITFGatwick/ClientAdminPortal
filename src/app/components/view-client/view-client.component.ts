import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IClient } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
    selector: 'app-view-client',
    templateUrl: './view-client.component.html',
    styleUrls: ['./view-client.component.css'],
    standalone: false
})
export class ViewClientComponent implements OnInit {

  client$: Observable<IClient> | null = null;

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    const path: string = location.pathname;
    const clientIdIndex = path.lastIndexOf('/') + 1;
    const clientIdString: string = path.substring(clientIdIndex);
    const clientId: number = parseInt(clientIdString, 10);
    this.client$ = this.clientsService
      .getClient(clientId);
  }
}
