import {Component} from '@angular/core';
import { MyService } from '../services/firstservice';

@Component({
    selector:'app-campaignlist',
    templateUrl:'./campaignListComponent.html',
    styleUrls:[]
})

export class CampaignListComponent{

    token
    constructor(private mys:MyService){

    }
   getToken(){
        this.token = this.mys.getToken()
   }
}