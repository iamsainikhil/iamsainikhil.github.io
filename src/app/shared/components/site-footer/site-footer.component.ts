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

  // footer links
  footerLinks = [
    {
      name: 'github',
      message: 'GitHub',
      url: 'https://github.com/iamsainikhil'
    },
    {
      name: 'linkedin',
      message: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iamsainikhil'
    },
    {
      name: "codepen",
      message: 'Codepen',
      url: "https://codepen.io/iamsainikhil",
    },
    {
      name: "hackerrank",
      message: 'HackerRank',
      url: "https://www.hackerrank.com/iamsainikhil",
    },
    {
      name: "stack-overflow",
      message: 'Stack Overflow',
      url: "https://stackoverflow.com/users/7508562/sai-nikhil?tab=profile",
    },
    // {
    //   name: "twitter",
    //   message: 'Twitter',
    //   url: "https://twitter.com/iamsainikhil12",
    // },
    // {
    //   name: "codesignal",
    //   message: 'CodeSignal',
    //   url: "https://app.codesignal.com/profile/iamsainikhil/",
    // }
  ];

  constructor(private gaService: GAService) { }

  ngOnInit() {
  }

  footerLinksClick(name) {
    this.gaService.emitEvent(`${name}-footer-link`, 'footer-links', 'link');
  }
}
