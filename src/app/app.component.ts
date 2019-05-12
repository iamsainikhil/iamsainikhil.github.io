import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { PageScrollConfig } from 'ngx-page-scroll';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import { environment } from '../environments/environment';
import { GAService } from './shared/services/ga.service';
import { ModalService } from './shared/services/modal.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  analyticsId = environment.analyticsId;

  private subscription: Subscription;

  /**
   * To know whether the user device is connected online
   */
  public isConnected: boolean = navigator.onLine;

  /**
   * Icon show/hide condition & user device height
   */
  showIcon = false;

  constructor(
    private afs: AngularFirestore,
    private modalService: ModalService,
    private gaService: GAService,
    private router: Router,
    private wowService: NgwWowService
  ) {
    /**
     * To detect web status
     */
    window.addEventListener('online', () => {
      this.isConnected = true;
    });
    window.addEventListener('offline', () => {
      this.isConnected = false;
    });

    /**
     * overriding default options for ng-page-scroll
     */
    PageScrollConfig.defaultScrollOffset = 0;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        }
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  getPosition(e) {
    if (e === 'bottom') {
      this.modalService.showModal.subscribe(res => {
        if (res) {
          this.showIcon = false;
        } else {
          this.showIcon = true;
        }
      });
    } else {
      this.showIcon = false;
    }
  }

  trackST() {
    this.gaService.emitEvent('scrollTop', 'click', 'scollToTop', 10);
  }

  ngOnInit() {
    this.router.events
      .distinctUntilChanged((previous: any, current: any) => {
        // Subscribe to any `NavigationEnd` events where the url has changed
        if (current instanceof NavigationEnd) {
          return previous.url === current.url;
        }
        return true;
      })
      .subscribe((x: any) => {
        gtag('config', this.analyticsId, { page_path: x.url });
      });
    console.clear();
    console.log(
      `%c

    lloHe   HelloH lloHelloHel  HelloH       loHell          oHello
    lloHe   Hello  lloHelloHell HelloH       loHell         loHelloH
     loH     ell   lloH    Hell   llo          Hel         lloH  loHe
     loH     ell    loH           ll           He          llo    oHe
     loH     ell    loHell        ll           He         ello    oHel
     loHelloHell    loHello       ll           He         ello    oHel
     loHel o ell    loHello       llo          Hel         llo    oHe
     loH     ell    loH          ello    oH   oHel    ll   llo    oHe
     loH     ell    loHe    ell   llo    oH    Hel    ll   lloH  loHe
    lloHe   Hello  lloHell Hell HelloHelloH  loHelloHell    loHelloH
    lloHe   Hello  lloHelloHell HelloHelloH  loHelloHell     oHello

    %c Interested in the code behind this website? Well you're in luck - this site is open source! Come say hi, tell me what you're debugging, or even lend a hand in my repo - https://github.com/iamsainikhil/iamsainikhil.github.io    `,
      'font-size: 1vmin',
      'margin-bottom: 15px; line-height: 1.5'
    );
  }

  ngAfterViewInit() {
    this.wowService.init();
  }

  onDeactivate() {
    window.scrollTo(0, 0);
  }
}
