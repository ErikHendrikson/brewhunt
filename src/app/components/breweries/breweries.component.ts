import { Component, inject } from '@angular/core';
import { BreweriesService } from '../../services/breweries.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ModalService } from '../../services/modal.services';

@Component({
    selector: 'app-breweries',
    imports: [MatTableModule, MatButtonModule, FormsModule],
    templateUrl: './breweries.component.html',
    styleUrl: './breweries.component.scss'
})
export class BreweriesComponent {
    private breweriesService = inject(BreweriesService);
    private modalService = inject(ModalService);

    errorMessage = this.breweriesService.showErrorMessage;
    breweries = this.breweriesService.loadedBreweries;
    displayedColumns: string[] = ['position', 'name'];
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

    ngOnDestroy() {
        this.searchSubject.complete();
    }
}