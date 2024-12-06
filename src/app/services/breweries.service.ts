import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Brewery } from '../models/brewery.model';
import { catchError, throwError } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class BreweriesService {
    private breweries = signal<Brewery[]>([]);
    private errorMessage = signal<string>('');
    private httpClient = inject(HttpClient);
    private localStorageService = inject(LocalStorageService);

    loadedBreweries = this.breweries.asReadonly();
    showErrorMessage = this.errorMessage.asReadonly();

    fetchBreweries(searchValue: string): void {
        this.httpClient.get<Brewery[]>(`https://api.openbrewerydb.org/breweries/search?query={${searchValue}}`).pipe(
            catchError(error => {
                return throwError(() => new Error('Could not load breweries'))
            })
        ).subscribe({
            next: breweriesRaw => {
                const breweries: Brewery[] = this.mapBreweriesToFavorites(breweriesRaw);
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

    loadBrewery(id: string): Brewery | undefined {
        return this.loadedBreweries().find(brewery => brewery.id === id);
    }

    toggleFavorite(id: string): void {
        const favoriteIds = this.localStorageService.getFavorites();
        if (favoriteIds.includes(id)) {
            this.localStorageService.removeFavorite(id);
        } else {
            this.localStorageService.setFavorite(id);
        }

        this.breweries.set(this.mapBreweriesToFavorites(this.breweries()));
    }

    mapBreweriesToFavorites(breweries: Brewery[]): Brewery[] {
        const favoriteIds = this.localStorageService.getFavorites();

        return breweries.map(brewery => ({
            ...brewery,
            isFavorite: favoriteIds.includes(brewery.id)
        }));
    }
}
