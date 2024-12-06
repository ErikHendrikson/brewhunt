import { Component, inject } from '@angular/core';
import { BreweriesService } from '../../services/breweries.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ModalService } from '../../services/modal.services';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-breweries',
    imports: [MatTableModule, MatButtonModule, MatIconModule, FormsModule],
    templateUrl: './breweries.component.html',
    styleUrl: './breweries.component.scss'
})
export class BreweriesComponent {
    private breweriesService = inject(BreweriesService);
    private modalService = inject(ModalService);

    errorMessage = this.breweriesService.showErrorMessage;
    breweries = this.breweriesService.loadedBreweries;
    displayedColumns: string[] = ['position', 'name', 'favorite'];
    searchValue: string = '';
    searchSubject = new Subject<string>();

    constructor() {
        this.searchSubject.pipe(
            debounceTime(200),
            distinctUntilChanged())
            .subscribe(value => {
                this.breweriesService.fetchBreweries(value);
            });
    }

    searchChanged(value: string): void {
        this.searchValue = value;
        this.searchSubject.next(value);
    }

    showBrewery(id: string): void {
        this.modalService.openOverlay(id);
    }

    toggleFavorite(id: string): void {
        this.breweriesService.toggleFavorite(id);
    }

    ngOnDestroy() {
        this.searchSubject.complete();
    }
}