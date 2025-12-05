import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search: string = '';
  products = [
  { name: 'Mouse Gamer', price: 120, category: 'Periférico', stock: 16},
  { name: 'Teclado Mecânico', price: 350, category: 'Periférico', stock: 0 },
  { name: 'Monitor 27"', price: 1400, category: 'Tela', stock: 7 },
  { name: 'Cadeira Gamer', price: 900, category: 'Mobiliário', stock: 20 },
];

}
