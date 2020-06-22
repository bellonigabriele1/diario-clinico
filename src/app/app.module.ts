import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { VisualizeComponentComponent } from './visualize-component/visualize-component.component';
import { RoutineComponentComponent } from './routine-component/routine-component.component';
import { RoutineItemComponentComponent } from './routine-component/routine-item-component/routine-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    VisualizeComponentComponent,
    RoutineComponentComponent,
    RoutineItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
