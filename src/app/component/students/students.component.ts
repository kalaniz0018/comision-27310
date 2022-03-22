import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  note: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Alaniz Karina', note: 10 },
  { position: 2, name: 'Angeleri Celeste', note: 10 },
  { position: 3, name: 'Dafne Alul', note: 8 },
  { position: 4, name: 'Araxi Osikovsky', note: 3 },
  { position: 5, name: 'Balestrieri Micaela', note: 4 },
  { position: 6, name: 'Perez Juan', note: 6 },
  { position: 7, name: 'Fraga Fanego Joaquin', note: 2 },
  { position: 8, name: 'Fanego Ruben', note: 1 },
  { position: 9, name: 'Fanego Veronica', note: 9 },
  { position: 10, name: 'Fraga Federico', note: 7 },
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
 

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;


  /**
   * @title Styling columns using their auto-generated column names
   */

  constructor() { }

  ngOnInit(): void {
  }

}
