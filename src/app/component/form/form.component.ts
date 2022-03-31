import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

/*   personForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required)
  }) */

  inputName?: string;
  inputSurName?: string;
  inputEmail?: string;
  inputPhone?: number;

  userForm = new FormGroup({});
  
  constructor(public fb: FormBuilder ) { }
 
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
    })
  }


/*   formularioContacto = this.fb.group({
    nombre:new FormControl  ('', [Validators.required]),
    email: new FormControl  ('',  [Validators.required, Validators.email]),
    mensaje:new FormControl ('', [Validators.required, Validators.maxLength(500)])
  });

   onSubmit(){
    console.log(this.formularioContacto.value)
  }  */

}
