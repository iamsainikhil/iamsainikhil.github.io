import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-site-modal',
  templateUrl: './site-modal.component.html',
  styleUrls: ['./site-modal.component.css']
})
export class SiteModalComponent implements OnInit {
  @Input() docId: string;
  @Input() name: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalService.showModal.next(false);
  }

}
