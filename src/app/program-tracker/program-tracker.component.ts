import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-tracker',
  templateUrl: './program-tracker.component.html',
  styleUrls: ['./program-tracker.component.css']
})
export class ProgramTrackerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  username: string;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }
}
