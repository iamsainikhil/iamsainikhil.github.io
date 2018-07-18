import { Component, OnInit } from '@angular/core';
import { GAService } from './../../services/ga.service';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {

  showDisclaimerModal = false;
  showPrivacyModal = false;

  date = new Date();

  constructor(private gaService: GAService) { }

  ngOnInit() {
  }

  footerLinksClick(name) {
    this.gaService.emitEvent(`${name}-footer-link`, 'footer-links', 'link');
  }
}
