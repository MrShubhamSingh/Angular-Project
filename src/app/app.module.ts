import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CampaignComponent} from './components/campaignComponent'
import {CampaignListComponent} from './components/campaignListComponent'
import { MyService } from './services/firstservice';

@NgModule({
  declarations: [
    AppComponent, CampaignComponent, CampaignListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
