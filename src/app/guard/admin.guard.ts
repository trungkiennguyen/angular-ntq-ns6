import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AdminService } from '../service/admin.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private adminService: AdminService){}

    canActivate() {
        console.log('guard',this.adminService.getLogin());
        return this.adminService.getLogin();
    }
}