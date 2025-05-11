import { Component, signal, computed, Output, EventEmitter } from '@angular/core';
import { CoffeeService } from './coffee.service';
import { CoffeeCardComponent } from './coffee-card.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FormsModule, CoffeeCardComponent],
  providers: [CoffeeService],
  template: `
  <input [(ngModel)]="searchTerm" placeholder="Search coffee..." class="search-input">
  
  <div class="coffee-list">
    <app-coffee-card
      *ngFor="let coffee of filteredCoffees()"
      [coffee]="coffee"
      (order)="onCoffeeOrdered($event)">
    </app-coffee-card>
  </div>
  `
  })
export class HomeComponent {
  searchTerm = '';
  coffees = signal<{ name: string; description: string; image: string }[]>([]);

  filteredCoffees = computed(() =>
    this.coffees().filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  );

  @Output() coffeeSelected = new EventEmitter<string>();

  constructor(private coffeeService: CoffeeService) {
    this.coffees.set(this.coffeeService.getCoffees());
  }

  onCoffeeOrdered(name: string) {
    this.coffeeSelected.emit(name);
  }
}
