import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '../service/admin.service';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AdminService],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(val: any){
    if(val.username === 'admin' && val.password === 'admin'){
      this.adminService.setLogin(true);
      console.log('DASTA', this.adminService.getLogin());
      // this.router.navigate(['/todoapp']);
    }
  }
}

// https://stackoverflow.com/questions/44099254/how-to-handle-angular-2-canactivate-route-guards