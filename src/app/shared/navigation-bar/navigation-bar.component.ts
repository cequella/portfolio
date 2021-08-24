import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationMenuService } from 'src/app/service/navigation-menu.service';
import { NavMenuItem } from '../../model/NavMenuItem';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input("title") title: string;
  @Output("onItemClick") onItemClickEmitter = new EventEmitter<NavMenuItem>();
  
  menu: Observable<NavMenuItem[]>;
  
  constructor(private navigationMenuService: NavigationMenuService) { }

  ngOnInit(): void {
    this.menu = this.navigationMenuService.menu;
  }

}
