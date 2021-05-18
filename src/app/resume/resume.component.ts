import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GAService } from './../shared/services/ga.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  showLoader: boolean = false
  type:string = 'concise'
  conciseDriveURL: string = "https://drive.google.com/file/d/1GumjkNd7wd0T0NBlIJ_S2zexzcPgvIav/preview?usp=sharing"
  detailedDriveURL: string = "https://drive.google.com/file/d/1M7q7EUSms8qzBQJfdVVuS_Cxr9EWfpO4/preview?usp=sharing"


  constructor(
    private router: Router,
    private gaService: GAService
  ) { }

  ngOnInit() {}

  updateResumeType(resumeType) {
    this.showLoader = true
    this.type = resumeType
    this.gaService.emitEvent(`view-${resumeType}-resume`, `${resumeType}-button`, 'button');
    setTimeout(() => {
      this.showLoader = false
    }, 1000);
  }

  getViewURL() {
    return this.type === 'concise' ? this.conciseDriveURL : this.detailedDriveURL
  }
}
