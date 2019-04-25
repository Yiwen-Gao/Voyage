import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions-interface',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  readonly logoPath = '../../assets/voyage-logo.png';
  constructor() { }

  ngOnInit() {
  }

}
