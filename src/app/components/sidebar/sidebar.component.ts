import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/questions', title: 'All Questions',  icon: 'dashboard', class: '' },
    { path: '/questions/create', title: 'New Question',  icon: 'local_hospital', class: '' },
    { path: '/quiz', title: 'Demo Quiz',  icon: 'request_quote', class: '' },
    { path: '/result', title: 'Quiz Result',  icon: 'card_giftcard', class: '' },
    { path: '/winner', title: 'Quiz-Winner',  icon: 'outlined_flag', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}