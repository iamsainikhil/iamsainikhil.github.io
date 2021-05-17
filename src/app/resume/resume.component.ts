import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GAService } from './../shared/services/ga.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  type:string = 'concise'
  conciseSrc: string = "https://firebasestorage.googleapis.com/v0/b/iamsainikhil-portfolio.appspot.com/o/images%2Fresume%2FSaiNikhilBheemanathiniResumeConcise.pdf?alt=media&token=abd4a8e0-69ea-4ba7-9e2d-a17ba0d109d9"
  conciseDriveURL: string = "https://drive.google.com/file/d/1GumjkNd7wd0T0NBlIJ_S2zexzcPgvIav/preview?usp=sharing"
  detailedDriveURL: string = "https://drive.google.com/file/d/1jrCfRT60ztxHYqJExXrBIzCundRiEJwT/preview?usp=sharing"
  detailedSrc: string = "https://firebasestorage.googleapis.com/v0/b/iamsainikhil-portfolio.appspot.com/o/images%2Fresume%2FSaiNikhilBheemanathiniResumeDetailed.pdf?alt=media&token=1424aa38-028b-48f8-8ba2-22438e45901b"


  constructor(
    private router: Router,
    private gaService: GAService
  ) { }

  ngOnInit() {}

  updateResumeType(resumeType) {
    this.type = resumeType
    this.gaService.emitEvent(`view-${resumeType}-resume`, `${resumeType}-button`, 'button');
  }
}
