import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country.interface';
import { Observable, catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  criteria: string = '';
  result: any = [];
  error: boolean = false;
  countries$: Observable<Country[]>;
  countries: Country[] = [];
  constructor(private countryService: CountryService) { 
    this.countries$ = of([]);   
  }

  search() {
    this.error = false;
    console.log('a')
    this.countries$ = this.countryService.SearchCountry(this.criteria)
    .pipe(
      tap((data) => {
        console.log('b')
        this.countries = data;
      }),
      catchError((err) => {
        if (err.status === 404) {
          this.error = true;          
        }
        return of([]);
      }));
  }

  resetError(): void {
    this.error = false;
  }

}
