import { Component, OnInit } from '@angular/core';

import * as microsoftTeams from "@microsoft/teams-js"; 

@Component({
  selector: 'tp-view-pivotal-page',
  templateUrl: './view-pivotal-page.component.html',
  styleUrls: ['./view-pivotal-page.component.sass']
})
export class ViewPivotalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    microsoftTeams.initialize();
  }

}
