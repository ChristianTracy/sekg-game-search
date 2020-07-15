import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const BACKEND_URL = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = BACKEND_URL;

  constructor(private http: HttpClient) {}

  searchGames (query: string): Observable<Array<any>> {
    if (!query) return;
    let params = new HttpParams();
    params = params.append('search', query);
    const url = `${this.baseUrl}/games`;
    return this.http.get<Array<any>>(url, { params });
  }

}
