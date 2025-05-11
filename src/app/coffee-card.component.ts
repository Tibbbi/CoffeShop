
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  template: `
    <div class="card">
      <img [src]="coffee.image" [alt]="coffee.name" class="coffee-img">
      <h2>{{ coffee.name }}</h2>
      <p>{{ coffee.description }}</p>
      <button (click)="order.emit(coffee.name)">Order Now</button>
    </div>
  `
})
export class CoffeeCardComponent {
  @Input() coffee!: { name: string; description: string; image: string };
  @Output() order = new EventEmitter<string>();
}
