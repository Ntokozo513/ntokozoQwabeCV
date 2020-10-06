import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContactModule} from "src/contact/contact.module";
import {ExprienceModule} from "src/exprience/exprience.module";
import {SkillsModule} from "src/skills/skills.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkillsModule,
    ContactModule,
    ExprienceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
