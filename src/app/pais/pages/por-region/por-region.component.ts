import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {ResultBasicComponent} from "../result-basic/result-basic.component";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent extends ResultBasicComponent{

  public regiones= ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva = '';
  constructor(paisService:PaisService) {
    super(paisService);
  }

  ngOnInit(): void {
  }

  public override buscar(termino:String){
    if(termino === this.regionActiva) return;

    this.regionActiva = termino.toString();
    this.paises = [];
    this.paisService.filtrarRegion(termino.toString())
      .subscribe({
        next:value => {
          this.paises = value;
          console.log(value);
          this.isError = false;
        },
        error:err => {
          console.error(err);
          this.isError = true;
        }
      })
  }

  public getClassButton(region:string){
    return (this.regionActiva === region)? 'btn-primary':'btn-outline-primary';
  }
}
