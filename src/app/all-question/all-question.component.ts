import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
title = 'Search a question'
title2 ='filter by'
title3='CAN YOU ANSWER...'
title4='ALL QUESTIONS'
  constructor() { }

  ngOnInit() {
  }

}
