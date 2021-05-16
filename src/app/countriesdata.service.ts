import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesdataService {

  constructor(private hc:HttpClient) { }

  getPost():Observable<any[]>
  {
    return this.hc.get<any[]>("https://restcountries.eu/rest/v2/all")
  }
}
