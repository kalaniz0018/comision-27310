import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /*
   form: any */

  inputName?: string;
  inputSurName?: string;
  inputEmail?: string;
  inputPhone?: number;

  userForm = new FormGroup({});

  constructor(public fb: FormBuilder) { }
  /*   myform = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10)])],
      email: ['', Validators.email],
      address: ['', Validators.required]
    }) */
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
    })
  }
  /*   clicked() {
      this.form = this.myform.value
      var name = this.myform.get('name')?.value;
      console.log(name)
    } */



}
