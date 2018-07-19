import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Avatar } from './../models/avatar';

@Injectable()
export class AvatarService {

    avatarCollection: AngularFirestoreCollection<Avatar>;

    constructor(
        private afs: AngularFirestore
    ) {
        this.avatarCollection =  afs.collection<Avatar>('avatars');
    }

    /**
     * Get data from About collection in firestore
     */
    getAvatarData() {
        return this.avatarCollection.valueChanges();
    }
}
