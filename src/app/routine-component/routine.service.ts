import { Injectable } from '@angular/core';
import { RoutineItem } from './routine.model';

@Injectable({
  providedIn: 'root',
})

export class RoutineService {

    // routineItems = ['Keppra', 'Frisium', 'Fenobarbital'];
    routineItems = [new RoutineItem('Keppra', false, '08.00'), new RoutineItem('Frisium', false, '21.40'), new RoutineItem('Keppra', false, '22.00')];
    routineNames = this.routineItems.map(item => item.name.concat(item.orario));
    position = 0;

    fattoNonFatto(itemName) {
      this.position = this.routineNames.indexOf(itemName);
      this.routineItems[this.position].isDone = !this.routineItems[this.position].isDone;
      console.log(this.position);
    }

}