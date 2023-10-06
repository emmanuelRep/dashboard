import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private apiBaseUrl = '/api/data';

  constructor(private http: HttpClient) { }

  getData(path: string): Observable<string> {
    //set response to type
    const options = {responseType: 'text' as 'json'}

    return this.http.get<any>(`http://localhost:3000/api/data/?path=${path}`, options)
  }
}
