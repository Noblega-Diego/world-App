import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-search',
  templateUrl: './warning-search.component.html',
  styleUrls: ['./warning-search.component.scss']
})
export class WarningSearchComponent {
  @Input()
  public busqueda:string = "";

  constructor() { }

}
