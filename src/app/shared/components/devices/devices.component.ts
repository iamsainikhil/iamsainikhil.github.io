import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
