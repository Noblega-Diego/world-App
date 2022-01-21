import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {Country} from "../interfaces/country";
import {Observable, of, Subject} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private countryServiceUrl = "https://restcountries.com/v3.1";

  constructor(private HTTP: HttpClient) { }

  get httpParams(){
    return new HttpParams()
      .set('fields','name,flags,population,cca2');
  }

  public buscarPais(name:string): Observable<Country[]>{

    const url = this.countryServiceUrl + "/name/" + name.trim();
    return  this.HTTP.get<Country[]>(url, {params:this.httpParams});
  }

  public buscarPaisPorFieldsPersonalizado(name:string, fields:string): Observable<Country[]>{
    const url = this.countryServiceUrl + "/name/" + name.trim();
    return  this.HTTP.get<Country[]>(url, {params:new HttpParams()
        .set('fields', fields)});
  }

  public todosPaises(): Observable<Country[]>{
    const url = this.countryServiceUrl + "/all";
    return  this.HTTP.get<Country[]>(url, {params:this.httpParams});
  }




  public filtrarRegion(region:string){
    const url = this.countryServiceUrl + "/region/" + region.trim();
    return  this.HTTP.get<Country[]>(url, {params:this.httpParams});
  }

  public filtrarCapital(capital:string){
    const url = this.countryServiceUrl + "/capital/" + capital.trim();
    return  this.HTTP.get<Country[]>(url, {params:this.httpParams});
  }

  public getPais(code:string){
    const url = this.countryServiceUrl + "/alpha/" + code.trim();
    return  this.HTTP.get<Country[]>(url).pipe(
      switchMap(param=> of(param[0]))
    );
  }
}
