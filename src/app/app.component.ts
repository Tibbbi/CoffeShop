import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedCoffee = signal('');

  updateSelectedCoffee(name: string) {
    this.selectedCoffee.set(name);
  }
}
