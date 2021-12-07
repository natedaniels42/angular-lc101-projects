import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: {name: string, url: string}[] = [{name: 'Google', url: 'https://www.google.com'}, {name: 'Yahoo', url: 'https://www.yahoo.com'}];
  constructor() { }

  ngOnInit() {
  }

}
