import { Component, Input} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  pageSize: number = 10;
  pageSizeOptions: number[] = [ 5 , 10 , 20 , 50];
  page_number: number = 1;

  @Input() paises :  Country[] = [];

  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.page_number= e.pageIndex + 1;
  }

}
