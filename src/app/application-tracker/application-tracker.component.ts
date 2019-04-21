import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Applications {
  university: string;
  program: string;
  deadline: string;
  website: string;
  completion: number;
  missing: string;
}

const APPLICATIONS: Applications[] = [
  {
    university: 'Columbia University',
    program: 'Data Science Master Program',
    deadline: 'Mar 15, 2020',
    website: 'http://www.cs.columbia.edu/education/admissions/#masters',
    completion: 70,
    missing: 'CV, GRE Score'
  },
  {
    university: 'Harvard University',
    program: 'Master of Computer Science',
    deadline: 'Mar 20, 2020',
    website: 'https://www.eecs.mit.edu/academics-admissions/graduate-program',
    completion: 80,
    missing: 'Recommandation Letter'
  },
  {
    university: 'Princeton University',
    program: 'Master of Computer Science',
    deadline: 'Mar 20, 2020',
    website: 'https://www.eecs.mit.edu/academics-admissions/graduate-program',
    completion: 60,
    missing: 'Education History, Recommendation Letter'
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

  displayedColumns: string[] = [
    'university',
    'program',
    'deadline',
    'completion',
    'missing',
    'website'
  ];
  dataSource = APPLICATIONS;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }
}
