import { Component, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import PROGRAM_DATA from '../data/programData.json';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-program-finder',
  templateUrl: './program-finder.component.html',
  styleUrls: ['./program-finder.component.css']
})
export class ProgramFinderComponent implements OnInit {
  colNames = ['program', 'university'];
  dataSource = PROGRAM_DATA;
  filters = [];
  readonly separatorKeysCodes = [ENTER, COMMA];

  constructor() {}

  ngOnInit() {}

  add(event): void {
    this.filters.push(event.value);
    if (event.input) { event.input.value = ''; }
  }

  remove(filter): void {
    const index = this.filters.indexOf(filter);
    this.filters.splice(index, 1);
  }
}
