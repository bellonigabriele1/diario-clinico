import { Component, OnInit, Input } from '@angular/core';
import { RoutineService } from '../routine.service';
import { RoutineItem } from '../routine.model';

@Component({
  selector: 'app-routine-item-component',
  templateUrl: './routine-item-component.component.html',
  styleUrls: ['./routine-item-component.component.css']
})
export class RoutineItemComponentComponent implements OnInit {

  constructor(private routineService: RoutineService) { }

  @Input() routineItem: RoutineItem;

  ngOnInit(): void {
  }

  fattoNonFatto() {
    this.routineService.fattoNonFatto();
  }

}
