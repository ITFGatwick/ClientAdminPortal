import { IRelatedClient } from "./related-client";

export interface IClient {
  id: number;
  name: string;
  description?: string;
  relatedClients: IRelatedClient[];
}
