import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AvatarService } from '../../services/avatar.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  avatarData: any;

  @Output() avatarUrl: EventEmitter<string> = new EventEmitter();
  @Output() gender: EventEmitter<string> = new EventEmitter();

  // to check for id of an avatar image item [ to apply styling to the clicked avatar]
  imageId: number;

  /**
   * check conditions for male/female avatars
   */
  maleCheck = true;
  femaleCheck = false;

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
    this.avatarData = this.avatarService.getAvatarData();
  }

  maleClick() {
    this.maleCheck = true;
    this.femaleCheck = false;
  }

  femaleClick() {
    this.maleCheck = false;
    this.femaleCheck = true;
  }

  avatarClick(url, i) {
    if (this.maleCheck === true) {
      this.gender.emit('male');
    } else {
      this.gender.emit('female');
    }
    this.imageId = i;
    this.avatarUrl.emit(url);
  }
}
