import { Component, OnInit } from '@angular/core';
import { NavigationMenuService } from 'src/app/service/navigation-menu.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {

  constructor(private navigationMenuService: NavigationMenuService) { }

  ngOnInit(): void {
    this.navigationMenuService.update([
      {
        label: "Sacilotto",
        link: "sacilotto"
      }
    ]);
  }

}
