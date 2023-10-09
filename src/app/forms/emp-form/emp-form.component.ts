import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent {

  subFn(empForm:any){

    //console.log(empForm.form.controls.empname.value)
    console.log(empForm)
  }
}
