import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { StudentsComponent } from './component/students/students.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MaterialModule } from 'material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
