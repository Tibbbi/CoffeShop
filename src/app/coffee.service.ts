import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  getCoffees() {
    return [
      { name: 'Espresso', description: 'Strong and bold espresso.', image: 'assets/coffee/espresso.jpg' },
      { name: 'Cappuccino', description: 'Smooth and creamy cappuccino.', image: 'assets/coffee/cappucino.jpg' },
      { name: 'Latte', description: 'Milky and sweet latte.', image: 'assets/coffee/latte.jpg' },
      { name: 'Americano', description: 'Espresso diluted with hot water.', image: 'assets/coffee/americano.jpg' },
      { name: 'Flat White', description: 'Microfoam textured milk and espresso.', image: 'assets/coffee/flatwhite.jpg' },
      { name: 'Mocha', description: 'Coffee with chocolate and steamed milk.', image: 'assets/coffee/mocha.jpg' },
      { name: 'Macchiato', description: 'Espresso topped with a small amount of foamed milk.', image: 'assets/coffee/machiato.jpg' },
      { name: 'Irish Coffee', description: 'Coffee combined with Irish whiskey and cream.', image: 'assets/coffee/irishcoffee.jpg' },
      { name: 'Cortado', description: 'Equal parts espresso and warm milk.', image: 'assets/coffee/cortado.jpg' },
      { name: 'Affogato', description: 'Espresso poured over ice cream.', image: 'assets/coffee/affogato.jpg' }
    ];
  }
}
