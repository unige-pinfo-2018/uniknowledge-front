import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-answer',
  templateUrl: './my-answer.component.html',
  styleUrls: ['./my-answer.component.css']
})
export class MyAnswerComponent implements OnInit {
title = 'Search a question'
title2 = 'Earned In-App Credits'
  constructor() { }

  ngOnInit() {
  }

}
