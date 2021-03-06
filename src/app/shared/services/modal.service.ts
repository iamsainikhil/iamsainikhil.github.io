import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ModalService {
  // tab-list logic
  scroll = new BehaviorSubject<boolean>(false);

  /**
   * modal dialog logic
   */
  showModal = new BehaviorSubject<boolean>(false);
  yPosition = new BehaviorSubject<number>(0);

  /**
   * disable scroll on parent
   */
  disableScroll = new BehaviorSubject<boolean>(false);

  constructor(private afs: AngularFirestore) {}
}
