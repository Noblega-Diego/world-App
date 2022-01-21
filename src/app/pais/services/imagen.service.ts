import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {query} from "@angular/animations";
import {Imagen, RootUnsplash} from "../interfaces/imagen";
import {Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private api_key = "Axx1D278TeBed0TZoaUKm4wmLYXKSMYDJonxK2t6xSg";
  private service_url = "https://api.unsplash.com";

  constructor(private HTTP: HttpClient) { }

  public buscar(termino:string): Observable<Imagen[]> {
    const params = new HttpParams()
      .set("query", termino)
      .set("client_id", this.api_key);
    return this.HTTP.get<RootUnsplash>(this.service_url+"/search/photos", {params})
      .pipe(
        switchMap(value => of(value.results))
      )
  }

}
