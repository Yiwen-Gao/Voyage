import { Component, OnInit } from '@angular/core';
import logoPath from '../../assets/voyage-logo.png';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly logo = logoPath;
  constructor() { }

  ngOnInit() {
  }

}
