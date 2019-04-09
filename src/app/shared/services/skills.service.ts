import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Skills } from "../models/skills";
import { map } from "rxjs/operators";

@Injectable()
export class SkillsService {
  skillsCollection: AngularFirestoreCollection<Skills>;

  showLoader: boolean;
  docExists: any;

  constructor(private afs: AngularFirestore) {
    this.skillsCollection = afs.collection<Skills>("skills");
  }

  /**
   * Get data from Skills collection in firestore
   */
  getSkillsData() {
    return this.skillsCollection.valueChanges();
  }

  /**
   * To know showLoader condition
   */
  getLoaderCondition() {
    this.docExists = this.skillsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          return a.payload.doc.exists;
        });
      })
    );
    if (this.docExists) {
      this.showLoader = false;
    } else {
      this.showLoader = true;
    }
    return this.showLoader;
  }
}
