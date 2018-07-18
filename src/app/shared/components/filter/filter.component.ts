import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from './../../services/filter.service';
import { GAService } from './../../services/ga.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() chipData = [];
  @Input() page: string;

  constructor(
    private filterService: FilterService,
    private gaService: GAService
  ) { }

  ngOnInit() {
  }

  chipSelect(i) {
    for (const j in this.chipData) {
      if (this.chipData[j].selected === true) {
        this.chipData[j].selected = false;
      }
    }
    // make the selected chip true
    this.chipData[i].selected = true;
    // emit the selected chip name
    this.filterService.chipName.next(this.chipData[i].name);
    // emit ga event
    this.gaService.emitEvent(`${this.chipData[i].name}-filter-select`, this.page, 'filter-click');
  }

}
