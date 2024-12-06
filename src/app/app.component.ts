import { Component } from '@angular/core';
import { BreweriesComponent } from "./breweries/breweries.component";

@Component({
    selector: 'app-root',
    imports: [BreweriesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'brewhunt';
}
