import { Component, Input, OnInit } from '@angular/core';
import { GAService } from './../../services/ga.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  menuIcon = true;
  showHeader = true; // to hide/show header while user scrolls
  animateHeader = false;

  constructor(private gaService: GAService) { }

  ngOnInit() {
  }

  menuIconClick() {
    if (this.menuIcon === false) {
      this.menuIcon = true;
    } else {
      this.menuIcon = false;
    }
    this.gaService.emitEvent('mobile-menu', 'menu-icon', 'cross');
  }

  mobileLinksClick(name) {
    if (this.menuIcon === false) {
      this.menuIcon = true;
    } else {
      this.menuIcon = false;
    }
    this.gaService.emitEvent(`${name}-mobile-header-link`, 'header-links', 'link');
  }

  desktopLinksClick(name) {
    this.gaService.emitEvent(`${name}-desktop-header-link`, 'header-links', 'link');
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
