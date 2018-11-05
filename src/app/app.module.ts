import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';
import { ListElementComponent } from './list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    ListElementComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
