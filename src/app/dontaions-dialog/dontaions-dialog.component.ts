import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dontaions-dialog',
  templateUrl: './dontaions-dialog.component.html',
  styleUrls: ['./dontaions-dialog.component.css']
})
export class DontaionsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DontaionsDialogComponent>, private router: Router) { }

  ngOnInit() {
  }
  closeDialog(response) {
    this.dialogRef.close(response);
  }

  GoToHome(){
    this.router.navigate(['']);
  }
}
