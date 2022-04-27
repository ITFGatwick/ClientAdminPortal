import { Component } from '@angular/core';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {

  constructor(private clientsService: ClientsService) { }

  onSubmit() {
    // this.clientsService.createClient();
  }
}
