import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { IClient } from '../models/client';
import { IError } from '../models/error';
import { initialClients } from './data/initial-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private storageKey = "clients";

  constructor() {
    this.ensureClientsExist();
  }

  addClient(name: string, description?: string): Observable<void> {
    const clients = this.loadClients();
    const newClient: IClient = { id: clients.length + 1, name: name, description: description, relatedClients: [] };
    clients.push(newClient);
    this.saveClients(clients);
    return of();
  }

  getClient(id: number): Observable<IClient> {
    const clients = this.loadClients();
    const client = clients.find(c => c.id === id);
    if (client) {
      return of(client);
    } else {
      const error: IError = { code: 404, message: `A client with id '${id}' could not be found` };
      return throwError(error);
    }
  }

  getClients(): Observable<IClient[]> {
    const clients = this.loadClients();
    return of(clients);
  }

  private ensureClientsExist() {
    const clients = this.loadClients();
    if (clients.length === 0) {
      clients.push(...initialClients);
      this.saveClients(clients);
    }
  }

  private loadClients(): IClient[] {
    const serializedClients = sessionStorage.getItem(this.storageKey);
    if (!serializedClients) {
      return [];
    }
    return JSON.parse(serializedClients);
  }

  private saveClients(clients: IClient[]) {
    const serializedClients = JSON.stringify(clients);
    sessionStorage.setItem(this.storageKey, serializedClients);
  }
}
