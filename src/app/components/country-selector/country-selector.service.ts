import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrySelectorService {
  apiUrl:string= ' https://restcountries.eu/rest/v2/';
  selectedCountry: Subject<string> = new BehaviorSubject<string>('');
  selectedCountryData:Subject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  getselectedCountry(): Observable<string> {
    return this.selectedCountry.asObservable();
  }

  getDataCall(route){
    return this.http.get(this.apiUrl + route);
  }
}
