import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkillsComponent} from 'src/skills/skills/skills.component';
import {ContactComponent} from 'src/contact/contact/contact.component';
import {ExprienceComponent} from 'src/exprience/exprience/exprience.component';


const routes: Routes = [
  {
    path:"skills",
    component: SkillsComponent
  },

  {
    path:"ex",
    component: ExprienceComponent
  },

  {
    path:"contact me",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
