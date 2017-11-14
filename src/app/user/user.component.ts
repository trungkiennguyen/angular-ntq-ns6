import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
})

export class UserComponent {
    user: string;
    
    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}