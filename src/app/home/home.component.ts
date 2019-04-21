import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly logo = '../../assets/voyage-logo.png';
  readonly options = ['applicants', 'admissions'];
  selectedOption = 'applicants';
  isAdmissions = false;
  constructor() {}

  ngOnInit() {}

  selectOption(selectedOption): void {
    this.selectedOption = selectedOption;
    this.isAdmissions = selectedOption === 'admissions';
  }
}
