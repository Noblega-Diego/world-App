import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/country";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-result-basic',
  templateUrl: './result-basic.component.html',
  styleUrls: ['./result-basic.component.scss']
})
export class ResultBasicComponent{
  public paises:Country[] = [];
  public isError:boolean = false;
  public termino = "";
  constructor(protected paisService:PaisService) {
    paisService.todosPaises()
      .subscribe(value=>{
        this.paises = value;
      })
  }

  public buscar(termino:String){}

  public recomendar(termino: string) {
    this.cargarRecomendaciones(termino);
  }

  public cargarRecomendaciones(termino: string) {
  }
}
