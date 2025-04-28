import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf], 
  template: `
    <h1>Coffee Shop</h1>
    <p *ngIf="selectedCoffee">You selected: {{ selectedCoffee }}</p>
  `
})
export class HeaderComponent {
  @Input() selectedCoffee = '';
}
