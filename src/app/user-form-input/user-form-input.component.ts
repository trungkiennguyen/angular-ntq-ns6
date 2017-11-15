import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserDisplayComponent } from '../user-display/user-display.component'

@Component({
  selector: 'app-user-form-input',
  templateUrl: './user-form-input.component.html',
  styleUrls: ['./user-form-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormInputComponent implements OnInit {
  userNames: string[] = ['takashy'];
  newUser: string;
  constructor() { }

  ngOnInit() {
  }

  addUser() {
    if(this.newUser) {
      this.userNames.push(this.newUser);
    }
    this.newUser = '';
  }
}
