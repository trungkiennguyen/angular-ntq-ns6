import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AdminService],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  onSubmit(val: any){
    this.adminService.login(val);
  }

  showLog(){
    this.adminService.checkLogin();
  }

}
