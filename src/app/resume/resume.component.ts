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
    this.gaService.emitEvent(`download-resume`, 'download-resume-button', 'button');
  }

  backClick() {
    this.gaService.emitEvent(`back-to-home-on-resume`, 'back-button', 'button');
    this.router.navigateByUrl('/');
  }
}
