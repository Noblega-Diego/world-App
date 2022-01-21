import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-suggestion-nav',
  templateUrl: './suggestion-nav.component.html',
  styles:[`

  `]
})
export class SuggestionNavComponent implements OnInit {
  @Input()
  public paises: Country[] =[];
  @Input('visible')
  public isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  get classVisibility() {
    return (this.isVisible)? 'visible':'invisible';
  }
}
