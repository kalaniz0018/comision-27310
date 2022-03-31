import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { StudentsComponent } from './component/students/students.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MaterialModule } from 'material/material.module';
import { FormComponent } from './component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsComponent,
    NavbarComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
