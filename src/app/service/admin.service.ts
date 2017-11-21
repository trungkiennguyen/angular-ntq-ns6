import { Injectable } from '@angular/core';

@Injectable()

export class AdminService {
    public isLogin: boolean = false;

    login(val: any) {
        if(val.username === 'root' && val.password === 'admin'){
            this.isLogin = true;
        }

        console.log(this.isLogin);
        return this.isLogin;
    }

    checkLogin() {
        console.log(this.isLogin);
        return this.isLogin;
    }

    logOut() {
        this.isLogin = false;
    }
}