import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-programs',
  templateUrl: './user-programs.component.html',
  styleUrls: ['./user-programs.component.css']
})
export class UserProgramsComponent implements OnInit {
  school: string;
  ngOnInit() {}
}
