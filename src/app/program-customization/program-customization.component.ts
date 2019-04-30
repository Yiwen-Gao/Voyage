import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-program-customization-dialog',
  templateUrl: './program-customization-dialog.component.html',
})
export class ProgramCustomizationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ProgramCustomizationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}

@Component({
  selector: 'app-program-customization',
  templateUrl: './program-customization.component.html',
  styleUrls: ['./program-customization.component.css']
})
export class ProgramCustomizationComponent implements OnInit {
  readonly questions = [
    "Why do you want to attend Columbia?",
    "What interests do you have outside of your field of study?",
    "What will you contribute to the student community?",
    "How does a degree from Columbia align with your goals?"
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(ProgramCustomizationDialogComponent, {
      width: '250px',
      data: ''
    });
  }

}
