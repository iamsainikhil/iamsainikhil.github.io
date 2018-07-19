import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class CommonService {

    constructor(private afs: AngularFirestore) {}

    getCollectionData(collectionName: string, opts?: any) {
        const query = {
            collectionName,
            field: 'date',
            operator: null,
            value: null,
            complexField: null, // usually for where operation
            complexOperator: '==',
            complexValue: false,
            complexQuery: false,
            complexDirection: true,
            order: false, // to have order take precedence over where
            limit: 50, // this is must to save firebase read calls bandwidth
            reverse: true,
            timestamp: false,
            ...opts
        };
        let collection: any;
        if (query.operator === null) {
            collection = this.afs.collection(collectionName,
                ref => ref.orderBy(query.field, query.reverse ? 'desc' : 'asc').limit(query.limit));
        } else if (query.complexQuery) {
            if (query.complexDirection) {
                collection =  this.afs.collection(collectionName,
                    ref => ref.where(query.field, query.operator, query.value)
                    .where(query.complexField, query.complexOperator, query.complexValue)
                    .limit(query.limit)
                );
            } else {
                collection =  this.afs.collection(collectionName,
                    ref => ref.where(query.complexField, query.complexOperator, query.complexValue)
                    .where(query.field, query.operator, query.value)
                    .limit(query.limit)
                );
            }
        } else {
            if (query.order) {
                collection =  this.afs.collection(collectionName,
                    ref => ref.where(query.complexField, query.operator, query.value)
                    .orderBy(query.field, query.reverse ? 'desc' : 'asc')
                    .limit(query.limit)
                );
            } else {
                collection =  this.afs.collection(collectionName,
                    ref => ref.where(query.field, query.operator, query.value).limit(query.limit));
            }
        }

        const collectionData = collection.snapshotChanges().map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                if (query.timestamp) {
                    const timeStamp = data.date;
                    data.date = timeStamp.toDate();
                }
                return {id, data};
            });
        });
        return collectionData;
    }

    getDocumentData(collectionName: string, docId: string, opts?: any) {
        const query = {
            timestamp: false,
            ...opts
        };
        const document = this.afs.doc(collectionName + '/' + docId);
        const documentData = document.snapshotChanges().map(snap => {
                const data = snap.payload.data();
                const id = snap.payload.id;
                if (query.timestamp) {
                  const timeStamp = data.date;
                  data.date = timeStamp.toDate();
              }
                return {id, data};
    });
        return documentData;
    }

    getSubCollectionData(collectionName: string, docId: string, subCollectionName: string, opts?: any) {
        const query = {
            timestamp: false,
            limit: 50,
            field: 'archive',
            operator: '==',
            value: true,
            ...opts
        };
        const subCollection =
        this.afs.collection(collectionName + '/' + docId + '/' + subCollectionName,
        ref => ref.limit(query.limit));
        const collectionData = subCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              if (query.timestamp) {
                const timeStamp = data.date;
                data.date = timeStamp.toDate();
            }
              return {id, data};
            });
        });

        return collectionData;
    }

    getSubCollectionDocumentData(collectionName: string, docId: string, subCollectionName: string, subDocId: string, opts?: any) {
        const query = {
            timestamp: false,
            ...opts
        };
        const document =
        this.afs.doc(collectionName + '/' + docId + '/' + subCollectionName + '/' + subDocId );
        const documentData = document.valueChanges();

        return documentData;
    }
}
