import { Component, OnInit } from '@angular/core';

const PROGRAM_DATA = [
  {program: 'CS Masters', university: 'Columbia'},
  {program: 'CS phD', university: 'MIT'},
  {program: 'CS MPhil', university: 'UCLA'}
];

@Component({
  selector: 'app-program-finder',
  templateUrl: './program-finder.component.html',
  styleUrls: ['./program-finder.component.css']
})
export class ProgramFinderComponent implements OnInit {

  colNames = ['program', 'university'];

  dataSource = PROGRAM_DATA;

  constructor() { }

  ngOnInit() {
  }

}
