import { Component, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

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
  filters: string[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    this.filters.push(event.value);
    if (event.input)
      event.input.value = '';
  }

  remove(filter: string): void {
    const index = this.filters.indexOf(filter);
    this.filters.splice(index, 1);
  }
}
