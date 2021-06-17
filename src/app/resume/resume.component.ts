import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GAService } from './../shared/services/ga.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  driveURL: string = "https://drive.google.com/file/d/1yfQOOcTCF4NoZuL753uUefO7syZEuDrZ/preview?usp=sharing"

  constructor(
    private router: Router,
    private gaService: GAService
  ) { }

  ngOnInit() {}

  downloadResume() {
    this.gaService.emitEvent('download-resume', 'download-resume-button', 'button');
  }
}
