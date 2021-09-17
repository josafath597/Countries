import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  constructor(private paisService: PaisService) { }

  termino : string = '';
  hayError: boolean = false;
  paises :  Country[] = [];
  paisesSugeridos :  Country[] = [];
  mostrarSugerencias: boolean = false;

  buscar(termino : string){
    this.hayError=false;
    this.termino = termino;
    this.mostrarSugerencias= false;
    

    this.paisService.buscarPais(this.termino)
    .subscribe( paises => {
      this.paises= paises;
      console.log(this.paises);
    }, err => {
      this.hayError= true;
      this.paises = [];
      console.log(err);
    });
  }

  sugerencias(termino : string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias= true;
    
    this.paisService.buscarPais(termino)
        .subscribe(paises => this.paisesSugeridos = paises.splice(0,5))
  }
  /*get resultados(){
    return this.paises;
  }*/
  buscarSugerido(termino : string){
    this.buscar(termino);
  
  }
}
