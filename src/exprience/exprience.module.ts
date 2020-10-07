import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExprienceComponent } from './exprience/exprience.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [ExprienceComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ExprienceModule { }
