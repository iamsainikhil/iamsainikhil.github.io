import { Component, Input, OnInit, Output } from '@angular/core';
import { AchievementsService } from './../../../shared/services/achievements.service';
import { GAService } from './../../../shared/services/ga.service';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  /**
   * page and data
   */
  @Input() page: string;
  @Input() achievementsData: any;
  @Input() showLoader: boolean;

  // filter chips
  @Output() chipData = [
    {
      name: 'show all',
      selected: true
    },
    {
      name: 'awards',
      selected: false
    },
    {
      name: 'testdome',
      selected: false
    },
    {
      name: 'certificates',
      selected: false
    }
  ];

  constructor(
    private achievementsService: AchievementsService,
    private gaService: GAService
  ) { }

  ngOnInit() {
  }

  buttonClick(name, id = null) {
    if (id !== null) {
      this.gaService.emitEvent(`${id}-view`, 'achievement-view', 'button');
    } else {
      this.gaService.emitEvent(`${name}-achievements-on-${this.page}`, 'achievements-section', 'button');
    }
  }

}
