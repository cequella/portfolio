import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { VitaeComponent } from './vitae.component';

const routes: Routes = [
  {
    path: "",
    component: VitaeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
  ],
  declarations: [
    VitaeComponent
  ],
  bootstrap: [ VitaeComponent ]
})
export class VitaeModule { }
