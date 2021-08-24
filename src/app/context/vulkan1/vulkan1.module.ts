import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Vulkan1Component } from './vulkan1.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: "",
    component: Vulkan1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IntroComponent,
    Vulkan1Component
  ],
})
export class Vulkan1Module { }
