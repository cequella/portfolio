import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtsRoutesModule } from './arts-routing.routing';

import { ArtsComponent } from './arts.component';
import { SacilottoComponent } from './sacilotto/sacilotto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtsComponent,
    SacilottoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArtsRoutesModule
  ],
  bootstrap: [
    ArtsComponent
  ]
})
export class ArtsModule { }
