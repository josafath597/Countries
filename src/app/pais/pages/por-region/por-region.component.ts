import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{ 
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {
  regiones: string[]= ['africa', 'americas', 'asia', 'europe', 'oceania'] ;
  regionActiva: string = '';
  paises: Country[] =[];
  hayError: boolean = false;

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-light' : 'btn btn-outline-light'
  }

  activarRegion(region: string) {

    if(region === this.regionActiva) { return;}
    this.hayError=false;
    this.regionActiva = region;
    this.paises=[];
    
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( paises => {
      this.paises= paises;
    }, err => {
      this.hayError= true;
      this.paises = [];
      console.log(err);
    });
    // TODO: hacer el llamado al servicio
  }

  

}
