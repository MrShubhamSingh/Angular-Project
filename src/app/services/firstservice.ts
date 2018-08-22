import {Injectable} from '@angular/core';

@Injectable()
export class MyService{
    token
    setToken(tokenreceived){
        this.token=tokenreceived
    }

    getToken(){
           return this.token
    }

}