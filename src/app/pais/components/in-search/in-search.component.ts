import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-in-search',
  templateUrl: './in-search.component.html',
  styleUrls: ['./in-search.component.scss']
})
export class InSearchComponent implements OnInit {

  @Output("onBuscar")   onPropagar = new EventEmitter<string>();
  @Output("onDeboucer") onDeboucer = new EventEmitter<string>();

  public termino: string = "";
  private deboucer = new Subject<string>();

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    this.deboucer
      .pipe(
        debounceTime(300)
      )
      .subscribe({
        next: value => {
          this.onDeboucer.emit(value);
        }
      })
  }

  propagar() {
    this.onPropagar.emit(this.termino);
  }

  teclaPrecionada() {
    this.deboucer.next(this.termino);
  }
}
