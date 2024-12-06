import { Component } from '@angular/core';
import { BreweriesComponent } from "./components/breweries/breweries.component";
import { PortalModule } from '@angular/cdk/portal';

@Component({
    selector: 'app-root',
    imports: [BreweriesComponent, PortalModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'brewhunt';
}
