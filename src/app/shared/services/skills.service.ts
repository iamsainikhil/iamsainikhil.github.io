import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Skills } from '../models/skills';

@Injectable()
export class SkillsService {

    skillsCollection: AngularFirestoreCollection<Skills>;

    showLoader: boolean;
    docExists: any;

    constructor(
        private afs: AngularFirestore
    ) {
        this.skillsCollection =  afs.collection<Skills>('skills');
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
        this.docExists = this.skillsCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              return a.payload.doc.exists;
            });
        });
        if (this.docExists) {
            this.showLoader = false;
        } else {
            this.showLoader = true;
        }
        return this.showLoader;
    }
}
