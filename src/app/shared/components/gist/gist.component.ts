import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit {

  @Input() htmlData: any;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
