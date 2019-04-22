import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions-interface',
  templateUrl: './admissions-interface.component.html',
  styleUrls: ['./admissions-interface.component.css']
})
export class AdmissionsInterfaceComponent implements OnInit {
  readonly logoPath = '../../assets/voyage-logo.png';
  constructor() { }

  ngOnInit() {
  }

}
