import { Injectable } from '@angular/core';
import { RoutineItem } from './routine.model';

@Injectable({
  providedIn: 'root',
})

export class RoutineService {

    // routineItems = ['Keppra', 'Frisium', 'Fenobarbital'];
    routineItems = [new RoutineItem('Keppra', false), new RoutineItem('Frisium', true)];

    fattoNonFatto() {
      this.routineItems[0].isDone = !this.routineItems[0].isDone;
    }

}