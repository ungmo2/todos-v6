import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../types/nav-item.type';

@Component({
  selector: 'app-todo-nav',
  template: `
    <ul class="nav">
      <li *ngFor="let navItem of navItems"
        [class.active]="navItem===navState"
        (click)="changeNav.emit(navItem)">{{navItem}}</li>
    </ul>
  `,
  styles: [`
    /* .nav */
    .nav {
      display: flex;
      margin: 15px;
      list-style: none;
    }

    .nav > li {
      padding: 4px 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    .nav > li.active {
      color: #fff;
      background-color: #23b7e5;
    }
  `]
})
export class TodoNavComponent {
  @Input() navItems: NavItem[];
  @Input() navState: string;
  @Output() changeNav = new EventEmitter<NavItem>();
}
