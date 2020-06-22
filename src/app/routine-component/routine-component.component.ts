import { Component, OnInit } from '@angular/core';
import { RoutineService } from './routine.service';

@Component({
  selector: 'app-routine-component',
  templateUrl: './routine-component.component.html',
  styleUrls: ['./routine-component.component.css']
})
export class RoutineComponentComponent implements OnInit {

  constructor(private routineService: RoutineService) { }

  routineItems = this.routineService.routineItems;

  ngOnInit(): void {
  }

}
