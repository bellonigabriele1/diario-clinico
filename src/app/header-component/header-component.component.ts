import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.service'

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private headerService: HeaderService) { }
  
  appMode = this.headerService.appMode;

  onDiary() {
    this.headerService.onDiary();
    this.appMode = this.headerService.appMode;
  }

  onVisualize() {
    this.headerService.onVisualize();
    this.appMode = this.headerService.appMode;
  }

  ngOnInit(): void {
  }

}
