import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GAService } from './../shared/services/ga.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(
    private router: Router,
    private gaService: GAService
  ) { }

  ngOnInit() {
  }

  viewResume() {
    this.gaService.emitEvent(`view-resume-pdf`, 'resume-pdf-button', 'button');
    console.log('resume viewed');
  }

  backClick() {
    this.gaService.emitEvent(`back-to-home-on-resume`, 'back-button', 'button');
    this.router.navigateByUrl('/');
  }
}
