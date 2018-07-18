import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/services/common.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent implements OnInit {

  showLoader = true;
  applicationSkillsData: any;
  technicalSkillsData: any;
  softSkillsData: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getTechnicalChartsData();
    this.getApplicationChartsData();
    this.getSoftChartsData();
  }

  getTechnicalChartsData() {
    this.commonService.getSubCollectionDocumentData(
      'skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'technical-skills'
    ).subscribe(() => {
      this.technicalSkillsData = this.commonService.getSubCollectionDocumentData(
        'skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'technical-skills'
      );
      this.showLoader = false;
    });
  }

  getApplicationChartsData() {
    this.commonService.getSubCollectionDocumentData(
      'skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'application-skills'
    ).subscribe(() => {
      this.applicationSkillsData = this.commonService.getSubCollectionDocumentData(
        'skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'application-skills'
      );
      this.showLoader = false;
    });
  }

  getSoftChartsData() {
    this.commonService.getSubCollectionDocumentData(
      'skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'soft-skills'
    ).subscribe(() => {
      this.softSkillsData = this.commonService.getSubCollectionDocumentData(
        'skills', 'Lrx3TUJ3wjlQCdZGP2bR', 'charts', 'soft-skills'
      );
      this.showLoader = false;
    });
  }

}
