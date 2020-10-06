import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ntokozoQwabeCV';

  aboutMe : boolean = true;
  nextPage : boolean = false;

  if(aboutMe = false)
  {
    this.nextPage = true;
  };

  aboutMeOn() : void{

    this.aboutMe = true;

  };

  aboutMeOff(): void{
    this.aboutMe = false;

  };

}
