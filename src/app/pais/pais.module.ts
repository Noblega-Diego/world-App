import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { WarningSearchComponent } from './components/warning-search/warning-search.component';
import {HttpClientModule} from "@angular/common/http";
import {PaisService} from "./services/pais.service";
import {SharedModule} from "../shared/shared.module";
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ResultBasicComponent } from './pages/result-basic/result-basic.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { SuggestionNavComponent } from './components/suggestion-nav/suggestion-nav.component';
import { InSearchComponent } from './components/in-search/in-search.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    WarningSearchComponent,
    PaisTableComponent,
    ResultBasicComponent,
    ImageCarouselComponent,
    SuggestionNavComponent,
    InSearchComponent
  ],
  exports:[
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class PaisModule { }
