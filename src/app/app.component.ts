import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UCAD-Hôpital le Dantec-UMMISCO';

    getEvent($event: Event) {
        console.log($event)
    }
}
