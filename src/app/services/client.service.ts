import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:4000/api/clients';

  constructor(private http: HttpClient) {}

  createClient(client: any): Observable<any> {
    return this.http.post(this.apiUrl, client);
  }

  getClients(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}