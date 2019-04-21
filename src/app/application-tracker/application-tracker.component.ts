import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const APPLICATIONS = [
  {
    university: 'Columbia',
    program: 'CS MS',
    deadline: 'Dec 15',
    website: 'http://www.cs.columbia.edu/education/admissions/#masters',
    completion: '70%',
    missing: 'CV, GRE Grade'
  },
  {
    university: 'MIT',
    program: 'CS MS',
    deadline: 'Dec 15',
    website: 'https://www.eecs.mit.edu/academics-admissions/graduate-program',
    completion: '60%',
    missing: 'Recommendation Letter'
  }
];

@Component({
  selector: 'app-application-tracker',
  templateUrl: './application-tracker.component.html',
  styleUrls: ['./application-tracker.component.css']
})
export class ApplicatoinTrackerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  username: string;

  displayedColumns: string[] = ['university', 'program', 'deadline', 'completion', 'missing'];
  dataSource = APPLICATIONS;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }
}
