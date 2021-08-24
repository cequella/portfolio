import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavMenuItem } from '../model/NavMenuItem';

@Injectable({
  providedIn: 'root'
})
export class NavigationMenuService {
  private _menu = new Subject<NavMenuItem[]>();  

  constructor() { }

  get menu(): Observable<NavMenuItem[]> {
    return this._menu.asObservable();
  }

  update(menu: NavMenuItem[]): void {
    this._menu.next(menu);
  }
}
