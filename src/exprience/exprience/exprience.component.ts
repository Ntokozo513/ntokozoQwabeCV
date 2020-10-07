import { Component, OnInit,Input } from '@angular/core';
import {GithubService} from "src/services/github.service"

@Component({
  selector: 'app-exprience',
  templateUrl: './exprience.component.html',
  styleUrls: ['./exprience.component.scss']
})
export class ExprienceComponent implements OnInit {

  constructor(private githubService:GithubService) { }

  ngOnInit() {
  }

  projectOne:string[]

  @Input() pOne: string[]

  getProjectOne(){

    this.githubService.getData().subscribe((data)=> {
      console.log(data);
      this.projectOne = data;
    })





  }

}
