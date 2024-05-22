import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  SearchCountry(criteria: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${criteria}`;
    return this.http.get<Country[]>(url);
  }
}
