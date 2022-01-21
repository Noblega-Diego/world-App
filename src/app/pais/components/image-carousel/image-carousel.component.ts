import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Imagen} from "../../interfaces/imagen";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  private pos = 0;
  @Input()
  public images:Imagen[] = [];

  @ViewChild('contenedor')
  private contenedor!:ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  moverAtras(mov:number) {
    let move: number = 0;
    if(mov == 0 && this.pos > 0) {
      move = (--this.pos * (260 + 16));
      this.trasladar(move);
    }else if(mov == 1 && this.pos < this.images.length -1){
      move = (++this.pos * (260 + 16));
      this.trasladar(move);
    }
  }

  private trasladar(distancia: number){
    this.contenedor.nativeElement.style.transform = `translatex(-${distancia}px)`;
    this.contenedor.nativeElement.style.transitionDuration = '100ms';
  }
}
