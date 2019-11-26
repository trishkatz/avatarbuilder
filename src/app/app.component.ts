import { Component } from '@angular/core';
import { AvatarService } from './rest/api/avatar.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avatar-builder-client-app';
  userAvatarType: string;
  userAccessoryCollection: object;

  constructor(private avatarService:AvatarService){
    avatarService.getUserAvatar().subscribe(data => {
      this.userAvatarType = data.userAvatarType;
      this.userAccessoryCollection = data.accessories;
    });
  }

}


