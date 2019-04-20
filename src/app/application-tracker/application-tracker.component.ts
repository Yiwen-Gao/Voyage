import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Applications {
  university: string;
  program: string;
  track: string;
  deadline: string;
  website: string;
}

const APPLICATIONS: Applications[] = [
  {
    university: 'Columbia',
    program: 'Computer Science MS',
    track: 'computer architecture',
    deadline: 'Dec 15',
    website: 'http://www.cs.columbia.edu/education/admissions/#masters'
  },
  {
    university: 'MIT',
    program: 'Computer Science MS',
    track: 'Computer Vision',
    deadline: 'Dec 15',
    website: 'https://www.eecs.mit.edu/academics-admissions/graduate-program'
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = APPLICATIONS;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }
}
