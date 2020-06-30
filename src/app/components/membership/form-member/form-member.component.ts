import { MemberDialogComponent } from './../../../member-dialog/member-dialog.component';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SendFormsService } from '../../../send-forms.service';

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.css'],
})
export class FormMemberComponent implements OnInit {
  @Input() Type: string;
  submitted: boolean;
 memberData: FormGroup;

  constructor(
    public routes: Router,
    public http: HttpClientModule,
    public DataService: SendFormsService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}



  ngOnInit(): void {
    this.submitted = false;
    this.memberData = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Address : ['', Validators.required],
      PostalCode: ['', Validators.required],
      City: ['', Validators.required],
   Type: ['', Validators.required],
      email: ['', Validators.email],
    });

  }
  test() {
    console.log(this.memberData.value);
  }

  onSubmit() {
  
    this.DataService.sendMembersData(this.memberData.value).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.submitted = true;
        console.log(this.submitted);
      },
      (error) => {
        console.log(error);
      }
    );
    // this.routes.navigate(['/BankID'], {
    //   queryParams: { FirstName: this.memberData.controls.FirstName.value },
    // });
    this.submitted = false;
  }
  openDialog(): void {
    this.matDialog.open(MemberDialogComponent, {
      panelClass: 'custom-dialog-container' });
  }
  getTypes() {
    return [
      { id: '1', name: 'Adhésion' },
      { id: '2', name: 'Renouvellement' },

    ];
  }

  getWay(){
    return [
      { id: '1', name: 'Bank ID' },
      { id: '2', name: 'Location' },
    ];
  }
}
