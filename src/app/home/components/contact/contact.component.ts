import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../shared/services/contact.service';
import { GAService } from './../../../shared/services/ga.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  successMessage = false;

  constructor(
    private contactService: ContactService,
    private gaService: GAService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    const data = {
      name: f.value.name,
      email: f.value.email,
      message: f.value.message,
      dateAdded: new Date()
    };
    this.contactService.addData(data);
    this.successMessage = true;
    this.gaService.emitEvent('submitted-contact-message', 'contact-form', 'button');
  }

  sendMessage() {
    this.successMessage = false;
  }

  legalItemsClick(name) {
    this.gaService.emitEvent(`${name}-contact-form`, 'legal-items-contact-form', 'accept-checkbox');
  }

}
