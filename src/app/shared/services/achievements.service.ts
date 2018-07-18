import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Achievement } from '../models/achievement';

@Injectable()
export class AchievementsService {

    achievementCollection: AngularFirestoreCollection<Achievement>;

    showLoader: boolean;
    docExists: any;

    constructor(
        private afs: AngularFirestore
    ) {}

    /**
     * Get limited data from Achievement collection in firestore
     */
    getLimitedAchievementsData(number) {
        this.achievementCollection =  this.afs.collection<Achievement>('achievements', ref => ref.limit(number));
        return this.achievementCollection.valueChanges();
    }

    /**
     * Get data from Achievement collection in firestore
     */
    getAchievementsData() {
        this.achievementCollection =  this.afs.collection<Achievement>('achievements');

        return this.achievementCollection.valueChanges();
    }

    /**
     * Get queried data from Achievement collection
     */
    getQueriedAchievementsData(field: string, operator: any, value: any) {
        this.achievementCollection = this.afs.collection('achievements', ref => ref.where(field, operator, value));

        return this.achievementCollection.valueChanges();
    }
}
