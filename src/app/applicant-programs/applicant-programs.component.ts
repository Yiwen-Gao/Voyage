import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-programs',
  templateUrl: './applicant-programs.component.html',
  styleUrls: ['./applicant-programs.component.css']
})
export class ApplicantProgramsComponent implements OnInit {
  school: string;
  ngOnInit() {}
}
