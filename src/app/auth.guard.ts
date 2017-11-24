import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AdminService } from './service/admin.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private adminService: AdminService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.adminService.getLogin());
    return this.adminService.getLogin();
  }
}
