import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SkillsService } from '../../../shared/services/skills.service';
import { GAService } from './../../../shared/services/ga.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  skillsData: any;

  showLoader = true;

  private subscription: Subscription;

  constructor(
    private skillsService: SkillsService,
    private gaService: GAService
  ) { }

  ngOnInit() {
    this.subscription = this.skillsService.getSkillsData().subscribe(() => {
      this.skillsData = this.skillsService.getSkillsData();
      this.showLoader = false;
    });
  }

  getUrl(imageUrl) {
    return 'url(imageUrl)';
  }

  buttonClick(name) {
   this.gaService.emitEvent(`${name}-skills`, 'skills-section', 'button');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
