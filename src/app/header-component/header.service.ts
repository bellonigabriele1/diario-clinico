import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class HeaderService {
    
    appMode = 'diary';

    onDiary() {
        this.appMode = 'diary';
    }

    onVisualize() {
        this.appMode = 'visualize';
    }
}