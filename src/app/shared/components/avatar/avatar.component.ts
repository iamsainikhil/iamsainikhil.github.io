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
  maleAvatar = true;
  femaleAvatar = false;

  genderRadio = [
    {
      label: 'Male',
      check: true
    },
    {
      label: 'Female',
      check: false
    }
  ];

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
    this.avatarData = this.avatarService.getAvatarData();
  }

  radioClick(i) {
    // random number and undefined data to force user select avatar after radioClick
    this.imageId = 99;
    this.gender.emit(undefined);
    this.avatarUrl.emit(undefined);

    this.genderRadio.forEach((v, index) => {
      if (index === i) {
        v.check = true;
        this.showAvatar(v.label);
      } else {
        v.check = false;
      }
    });
  }

  showAvatar(name: string) {
    if (name === 'Male') {
      this.maleAvatar = true;
      this.femaleAvatar = false;
    } else {
      this.maleAvatar = false;
      this.femaleAvatar = true;
    }
  }

  avatarClick(url, i) {
    this.genderRadio.forEach((v) => {
      if (v.check === true) {
        this.gender.emit(v.label);
      }
    });
    this.imageId = i;
    this.avatarUrl.emit(url);
  }
}
