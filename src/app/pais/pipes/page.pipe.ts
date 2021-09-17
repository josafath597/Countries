import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/pais.interface';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(paises: Country[], page_size: number, page_number: number): Country[] {
    if(!paises.length) return [];
    if(page_size === paises.length) {
      return paises
    }
    page_size = page_size || 5;
    page_number = page_number || 1;
    --page_number

    return paises.slice(page_number * page_size, (page_number + 1) * page_size)
  }

}
