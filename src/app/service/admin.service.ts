import { Injectable } from '@angular/core';

@Injectable()

export class AdminService {
    private Logined: boolean;

    constructor() {
        // this.Logined = false;
    }

    setLogin(val: boolean){
        this.Logined = val;
        console.log(this.Logined);
    }

    getLogin():boolean{
        return this.Logined;
    }
}