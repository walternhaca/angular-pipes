import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stockClass',
})
export class StockClassPipe implements PipeTransform {
    transform(stock: number): string {

    // Garantir que o valor é um número válido
    if (stock == null || isNaN(stock) || stock < 0) {
        return 'stock--blocked';
    }

    // Limites bem definidos
    const HIGH_STOCK = 10;
    const LOW_STOCK = 1;

    if (stock >= HIGH_STOCK) {
        return 'stock--active';
    }

    if (stock >= LOW_STOCK) {
        return 'stock--partial';
    }

    return 'stock--blocked';
}
}
