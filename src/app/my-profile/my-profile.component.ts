import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
title='My Profile'
title2='STATS'
title3='Question Asked: 12'
title4='Question Answered: 2'
title5='Earned In App Credits: 12983 (=3 ETCS @ university of Geneva)'

  constructor() { }

  ngOnInit() {
  }

}
