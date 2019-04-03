import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { About } from '../models/about';
import { AboutCard } from '../models/aboutCard';

@Injectable()
export class AboutService {

    aboutCollection: AngularFirestoreCollection<About>;
    aboutCardCollection: AngularFirestoreCollection<AboutCard>;
    docExists: any;

    constructor(
        private afs: AngularFirestore
    ) {
        this.aboutCollection =  afs.collection<About>('about');
    }

    /**
     * Get data from About collection in firestore
     */
    getAboutData() {
        return this.aboutCollection.valueChanges();
    }

    /**
     * Get data from about-card collection
     */
    getAboutCardData() {
        this.aboutCardCollection = this.afs.collection('about-card');

        return this.aboutCardCollection.valueChanges();
    }
}
