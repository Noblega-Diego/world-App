import { Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {ResultBasicComponent} from "../result-basic/result-basic.component";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent extends ResultBasicComponent{
  visibleSuggestion: boolean =false;

  constructor(paisService:PaisService) {
    super(paisService);
  }

  public override buscar(termino:String){
    this.paisService.filtrarCapital(termino.toString())
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
}
