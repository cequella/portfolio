import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

import { NavMenuItem } from "./model/NavMenuItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private viewportScrolled: ViewportScroller
  ) {}

  navigationClick(event: NavMenuItem): void {
    this.viewportScrolled.scrollToAnchor(event.link);
  }
}
