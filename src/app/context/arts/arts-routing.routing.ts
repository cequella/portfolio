import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtsComponent } from './arts.component';
import { SacilottoComponent } from './sacilotto/sacilotto.component';

const routes: Routes = [
  {
    path: "",
    component: ArtsComponent,
    children: [
      {
        path: "sacilotto",
        component: SacilottoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtsRoutesModule { }
