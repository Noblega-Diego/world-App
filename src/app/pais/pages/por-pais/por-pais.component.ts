import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {ResultBasicComponent} from "../result-basic/result-basic.component";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent extends ResultBasicComponent{
  public visibleSuggestion: boolean =false;
  private recomendaciones:Country[] = [];

  constructor(paisService:PaisService) {
    super(paisService)
  }

  public override buscar(termino:String){
    this.paisService.buscarPais(termino.toString())
      .subscribe({
        next:value => {
            this.paises = value;
            this.isError = false;
        },
        error:err => {
          this.isError = true;
          this.termino = termino.toString();
        }
      })
  }

  override cargarRecomendaciones(termino: string) {
    this.visibleSuggestion = true;
    if(termino.length >= 3)
    this.paisService.buscarPaisPorFieldsPersonalizado(termino.toString(),'name,cca2')
      .subscribe(value => {
        this.recomendaciones = value.slice(0,5);
        console.log(value)
      })
  }

  get Recomendaciones(){
    return this.recomendaciones;
  }
}
