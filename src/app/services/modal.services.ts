import { inject, Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BreweryComponent } from '../components/brewery/brewery.component';
import { BreweriesService } from './breweries.service';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    breweriesService = inject(BreweriesService);

    constructor(private overlay: Overlay) { }

    openOverlay(id: string): void {
        const brewery = this.breweriesService.loadBrewery(id);

        if (!brewery) {
            return;
        }

        const overlayRef: OverlayRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy: this.overlay.position()
                .global()
                .top('65px')
                .centerHorizontally()
        });

        const componentRef = overlayRef.attach(new ComponentPortal(BreweryComponent));

        overlayRef.backdropClick().subscribe(() => overlayRef.dispose());

        componentRef.instance.overlayRef = overlayRef;
        componentRef.instance.brewery = brewery;
    }
}