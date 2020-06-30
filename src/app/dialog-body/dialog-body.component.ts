import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router} from '@angular/router';
@Component({
    selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, private router : Router) { }

  ngOnInit() {
  }
  closeDialog(response) {
    this.dialogRef.close(response);
  }

  GoToHome(){
    this.router.navigate(['']);
  }
}
