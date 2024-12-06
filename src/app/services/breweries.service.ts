import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Brewery } from '../models/brewery.model';
import { catchError, debounceTime, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BreweriesService {
    private breweries = signal<Brewery[]>([]);
    private errorMessage = signal<string>('');
    private httpClient = inject(HttpClient);

    loadedBreweries = this.breweries.asReadonly();
    showErrorMessage = this.errorMessage.asReadonly();

    loadBreweries(searchValue: string): void {
        this.httpClient.get<Brewery[]>(`https://api.openbrewerydb.org/breweries/search?query={${searchValue}}`).pipe(
            catchError(error => {
                return throwError(() => new Error('Could not load breweries'))
            })
        ).subscribe({
            next: breweries => {
                this.breweries.set(breweries);
            },
            error: err => {
                this.errorMessage.set(err.message);

                setTimeout(() => {
                    this.errorMessage.set('');
                }, 1500);
            }
        })
    }
}
