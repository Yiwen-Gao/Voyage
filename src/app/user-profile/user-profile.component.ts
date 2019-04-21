import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileFormModel } from '../form-model/form-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileModel = new ProfileFormModel(
    'Serena',
    'Li',
    'Female',
    '111 sample drive',
    '123-456-7890',
    'serena.li@columbia.edu'
  );

  genders = ['Male', 'Female'];
  ngOnInit() {}
}
