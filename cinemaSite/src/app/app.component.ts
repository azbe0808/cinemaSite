import { Component } from '@angular/core';
import { Ticket } from '../shared/models/ticket';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items = [
    new Movie("ASd","haha",50),
    new Movie("ASdasdad","hadasdaha",51)
  ]
  title = 'cinemaSite';

  public movieClicked() {
    console.log("Movie was clicked");
    
}
}
