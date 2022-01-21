import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/country";
import {ActivatedRoute} from "@angular/router";
import {of, switchMap} from "rxjs";
import {ImagenService} from "../../services/imagen.service";
import {Imagen} from "../../interfaces/imagen";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!:Country;
  images:Imagen[]=[];

  constructor(private activedRouter:ActivatedRoute ,
              private paisService:PaisService,
              private imagenService:ImagenService) { }

  ngOnInit(): void {
    this.activedRouter.params
      .pipe(
        switchMap( ({id})=>this.paisService.getPais(id)),
        switchMap( country=>this.imagenService.buscar(country.name.common).pipe(
          switchMap(images=> of({country,images}))
            ))
      ).subscribe({
      next:({images, country}) => {
        this.pais = country;
        console.log(this.pais);
        this.images = images;
      }
    })
  }


}
