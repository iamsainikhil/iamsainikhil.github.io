import { Component, OnInit } from '@angular/core';
import { GAService } from './../../../shared/services/ga.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  menuIcon = true;
  showHeader = true;
  animateHeader = false;

  constructor(private gaService: GAService) { }

  ngOnInit() {
  }

  menuIconClick(name) {
    if (this.menuIcon === false) {
      this.menuIcon = true;
    } else {
      this.menuIcon = false;
    }
    this.gaService.emitEvent(`${name}-home-header-mobile`, 'mobile-menu-links', 'link');
  }

  linksClick(name) {
    this.gaService.emitEvent(`${name}-home-header-desktop`, 'home-header-desktop', 'link');
  }

  // show header when user scrolls up
  getPosition(e) {
    if (e === 'up') {
      this.showHeader = true;
      this.animateHeader = true;
    } else if (e === 'zero') {
      this.showHeader = true;
      this.animateHeader = false;
    } else {
      this.showHeader = false;
      this.animateHeader = false;
    }
  }

}
