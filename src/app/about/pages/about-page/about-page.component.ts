import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AboutService } from './../../../shared/services/about.service';
import { GAService } from './../../../shared/services/ga.service';
import { ModalService } from './../../../shared/services/modal.service';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  aboutCardData: any;
  showLoader = true;

  modalVisible: boolean;
  yPosition = 0;
  scrollEnable: boolean;

  private subscription: Subscription;

  constructor(
    private aboutService: AboutService,
    private modalService: ModalService,
    private gaService: GAService
  ) {}

  ngOnInit() {
    this.modalService.showModal.subscribe((res) => {
      setTimeout(() => {
        this.modalVisible = res;
      }, 50);
      if (!res) {
        // once closes the modal go to the previous user position
        // when they tried to open the modal
        this.modalService.scroll.subscribe((logic) => {
          if (logic) {
            this.scrollEnable = logic;
              if (sessionStorage.getItem('y')) {
                this.yPosition = Number(sessionStorage.getItem('y'));
                  setTimeout(() => {
                    window.scrollTo({
                      top: this.yPosition,
                      behavior: 'smooth'
                  });
                }, 100);
            }
          } else {
            sessionStorage.removeItem('y');
          }
        });
      }
    });

    this.subscription = this.aboutService.getAboutCardData().subscribe((res) => {
      this.aboutCardData = this.aboutService.getAboutCardData();
      this.showLoader = false;
    });
  }

  cardItemClick(name) {
    this.gaService.emitEvent(`${name}-about-card`, 'about-card', 'link');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
