import { DontaionsDialogComponent } from './../../dontaions-dialog/dontaions-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SendFormsService } from '../../send-forms.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  
submitted: boolean;
memberData: FormGroup;


  constructor(public http: HttpClientModule, public DataService: SendFormsService, private fb: FormBuilder,private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.submitted = false;
    this.memberData = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Address : ['', Validators.required],
      PostalCode: ['', Validators.required],
      City: ['', Validators.required],
      amount: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  onSubmit(){
    this.DataService.sendDonationsData(this.memberData.value).subscribe(
      data => {
          console.log(JSON.stringify(data));
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    this.submitted = false;

  }

  openDialog(): void {
    this.matDialog.open(DontaionsDialogComponent, {
      panelClass: 'custom-dialog-container' });
  }


}
