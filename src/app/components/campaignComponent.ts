import {Component, Input} from '@angular/core';
import {MyService} from '../services/firstservice'

function compare(a,b){
    if(a.likes<b.likes)
    return -1;
    if(a.likes>b.likes)
    return 1;
    return 0;
}

function compareInverse(a,b){
    if(a.likes<b.likes)
    return 1;
    if(a.likes>b.likes)
    return -1;
    return 0;
}

@Component({
    selector:'app-campaign',
    templateUrl:'./campaignComponent.html',
    styleUrls:[]
})



export class CampaignComponent{
    campaigns
    constructor(private myservice:MyService){
        console.log(this.myservice);
        this.campaigns=[
            {id:5619684, title:'Campaign 1', likes:"5"},
            {id:5624574, title:'Campaign 2', likes:"4"},
            {id:5634534, title:'Campaign 3', likes:"6"},
            {id:5636834, title:'Campaign 4', likes:"1"},
            {id:5644623, title:'Campaign 5', likes:"2"}
        ]
    }

   setAsc(){
      this.campaigns.sort(compare)
   } 

   setDsc(){
      this.campaigns.sort(compareInverse)
   }



 campaigntitle = "My First Campaign" 
 @Input() hdmi;
 @Input() user;
 @Input() likes;
 image = {
    earth:'https://www.cloudbees.com/sites/all/themes/juc2018/images/InfinityAnim_400px.gif'
 }
 
 setToken(){
     //here we will call the service
     this.myservice.setToken("This is my token")
 }

 onLikeListener(){
     this.likes++;
 }

 onClickListener(){
    confirm("Are You Sure!!")
 }
}