import {MatDialog} from '@angular/material/dialog';

import { Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { SendFormsService } from '../../send-forms.service';
import { DialogBodyComponent } from '../../dialog-body/dialog-body.component';


@Component({
  selector: 'app-contacting',
  templateUrl: './contacting.component.html',
  styleUrls: ['./contacting.component.css']
})
export class ContactingComponent implements OnInit {
userData: FormGroup;

  submitted: boolean;

  title = "Example Angular 8 Material Dialog";

  constructor(private DataService: SendFormsService, private fb: FormBuilder, private matDialog: MatDialog) {
    this.submitted = false;
}

  ngOnInit(): void {
    this.submitted = false;
    this.userData = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email : ['', Validators.email],
      HelpOrExp: ['', Validators.required],
      msgUser: ['', Validators.required]
      // YesOrNo:  ['', Validators.required]
    });

  }
  openDialog(): void {
    this.matDialog.open(DialogBodyComponent, {
      panelClass: 'custom-dialog-container' });
  }

test() {
  console.warn(this.userData.value);

  this.submitted = true;
  if (!this.userData.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.userData.value));

  }
}
sendDataAsFormBody() {

console.warn(this.userData.value);
this.DataService.sendData(this.userData.value).subscribe(
  data => {
    
    console.log(JSON.stringify(data));
    this.submitted = true;
    },
    error => {
      console.log(error);
    }

  );

this.submitted = false;

}


}
