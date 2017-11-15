import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Staff } from '../staff';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StaffFormComponent implements OnInit {
  departments = ['NS1', 'NS2', 'NS3', 'NS5', 'NS6'];
  staff = new Staff(1, 'Linh TX', 23, 'NS6');
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f);
  }

  get newStaff() {
    return JSON.stringify(this.staff);
  }
  
}
