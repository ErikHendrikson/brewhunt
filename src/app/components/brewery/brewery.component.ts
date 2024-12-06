import { Component, Input, OnInit } from '@angular/core';
import { Brewery } from '../../models/brewery.model';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
    selector: 'app-brewery',
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './brewery.component.html',
    styleUrl: './brewery.component.scss',
    animations: [
        trigger('slideInUp', [
            transition(':enter', [
                style({ transform: 'translateY(100%)', opacity: 0 }),
                animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
            ]),
        ]),
    ],
})
export class BreweryComponent implements OnInit {
    @Input({ required: true }) brewery!: Brewery;
    overlayRef!: OverlayRef;
    loaded = false;

    ngOnInit(): void {
        this.loaded = true;
    }

    close() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }

    get firstLetter(): string {
        return this.brewery.name.charAt(0).toUpperCase();
    }
}
