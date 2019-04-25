import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import applicants from '../../data/applicants.json';

@Component({
  selector: 'app-pending-applicants',
  templateUrl: './pending-applicants.component.html',
  styleUrls: ['./pending-applicants.component.css']
})
export class PendingApplicantsComponent implements OnInit {
  colNames = ['name', 'previous institution', 'GPA', 'GRE', 'status', 'full profile'];
  dataSource = applicants;
  filters = [];
  readonly separatorKeysCodes = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
  }

  add(event): void {
    this.filters.push(event.value);
    if (event.input) { event.input.value = ''; }
  }

  remove(filter): void {
    const index = this.filters.indexOf(filter);
    this.filters.splice(index, 1);
  }
}
