import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    getFavorites(): string[] {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    }

    setFavorite(favoriteId: string): void {
        const favorites = this.getFavorites();
        if (!favorites.includes(favoriteId)) {
            favorites.push(favoriteId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    removeFavorite(favoriteId: string): void {
        let favorites = this.getFavorites();
        favorites = favorites.filter(id => id !== favoriteId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}
