import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./context/vitae/vitae.module").then(m => m.VitaeModule)
  },
  {
    path: "vulkan",
    loadChildren: () => import("./context/vulkan1/vulkan1.module").then(m => m.Vulkan1Module)
  },

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
