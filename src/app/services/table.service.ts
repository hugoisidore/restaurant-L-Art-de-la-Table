import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = 'http://localhost:4000/api/tables';

  constructor(private http: HttpClient) {}

  createTable(table: any): Observable<any> {
    return this.http.post(this.apiUrl, table);
  }

  getTables(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
