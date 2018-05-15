import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title = 'Uni';
title1 = 'Knowledge'
title2 = 'University Of Geneva'
  constructor() { }

  ngOnInit() {
  }

}
