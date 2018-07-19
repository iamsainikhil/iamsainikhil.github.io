import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Ip } from '../models/ip';
import { Like } from '../models/like';


@Injectable()
export class LikesCommentsService {

 // dates
  date = new Date();
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
  ];
  hours = this.date.getHours();
  minutes = this.date.getMinutes();
  month = this.date.getMonth();
  day = this.date.getDate();
  year = this.date.getFullYear();

 // required to set document id in contact collection
  id = `${this.monthNames[this.month]}-${this.day}-${this.year}-${this.hours}-${this.minutes}`;

    constructor(
        private afs: AngularFirestore,
        private http: HttpClient
    ) {}


    /**
     * get likes data
     */
    getLikesData(docId: string, collection: string) {
        const likesCollection = this.afs.collection<Like>(collection + '/' + docId + '/likes');
        const likes = likesCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Like;
              const id = a.payload.doc.id;
              return {id, data};
            });
        });
        return likes;
    }

    /**
     * increment likes in a project document
     */
    incrementLikes(collection: string, docId: string, count: number, id: string) {
        const likesCollection = this.afs.collection<Like>(collection + '/' + docId + '/likes');
        const data = {
            count : count + 1
        };
        likesCollection.doc(id).update(data);
    }

    /**
     * decrement likes in a project document
     */
    decrementLikes(collection: string, docId: string, count: number, id: string) {
        const likesCollection = this.afs.collection<Like>(collection + '/' + docId + '/likes');
        const data = {
            count : count - 1
        };
        likesCollection.doc(id).update(data);
    }

    /**
     * add comments data
     */
    addCommentsData(collection: string, docId: string, data: any) {
        const commentsCollection = this.afs.collection<Comment>(collection + '/' + docId + '/comments').doc(this.id);
         // get location details
         this.http.get('https://ipinfo.io').subscribe(
            (res: Ip) => {
              commentsCollection.set({
                  name: data.name,
                  email: data.email,
                  message: data.message,
                  dateAdded: this.date,
                  approved: false,
                  gender: data.gender,
                  avatarUrl: data.avatarUrl,
                  city: res.city,
                  country: res.country,
                  region: res.region,
                  latlong: res.loc,
                  ip: res.ip,
                  zipCode: res.postal
              });
            },
            (err) => {
              // save data without location details
              commentsCollection.set(data);
            }
          );
    }

    /**
     * get comments data
     */
    getCommentsData(collection: string, docId: string, field: string, operator: any, value: any) {
        const commentsCollection = this.afs.collection<Comment>(collection + '/' + docId + '/comments',
        ref => ref.where(field, operator, value));
        const comments = commentsCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              const timeStamp = data.dateAdded;
              const date = timeStamp.toDate();
              data.dateAdded = this.dateDifference(date);
              return {id, data};
            });
        });

        return comments;
    }

    /**
     * Get data from comments collection based on 'orderBy' query
     */
    getOrderedCommentsData(collection: string, docId: string, field: string) {
        const commentsCollection =  this.afs.collection<Comment>(collection + '/' + docId + '/comments',
            ref => ref.where('approved', '==', true).orderBy(field));
        const comments = commentsCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data();
              const Id = a.payload.doc.id;
              const timeStamp = data.dateAdded;
              const date = timeStamp.toDate();
              data.dateAdded = this.dateDifference(date);
              return {Id, data};
            });
        });

        return comments;
    }

    dateDifference(actualDate) {
        // Calculate time between two dates:
        const date1 = actualDate;
        const date2: any = new Date();

        let r = {}; // object to be returned
        let message: string;

        const diffInSeconds = Math.abs(date2 - date1) / 1000;
        const days = Math.floor(diffInSeconds / 60 / 60 / 24);
        const hours = Math.floor(diffInSeconds / 60 / 60 % 24);
        const minutes = Math.floor(diffInSeconds / 60 % 60);
        const seconds = Math.floor(diffInSeconds % 60);
        const milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);

        const months = Math.floor(days / 31);
        const years = Math.floor(months / 12);

        r = {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds
        };

        // check if difference is in years or months
        if (years === 0 && months === 0) {
            // show in days if no years / months
            if (days > 0) {
                if (days === 1) {
                    message = days + ' day';
                } else {
                    message = days + ' days';
                }
            } else if (hours > 0) {
                if (hours === 1) {
                    message = hours + ' hour';
                } else {
                    message = hours + ' hours';
                }
            } else {
                // show in minutes if no years / months / days
                if (minutes === 1) {
                    message = minutes + ' minute';
                } else {
                    message = minutes + ' minutes';
                }
            }
        } else if (years === 0 && months > 0) {
            // show in months if no years
            if (months === 1) {
                message = months + ' month';
            } else {
                message = months + ' months';
            }
        } else if (years > 0) {
            // show in years if years exist
            if (years === 1) {
                message = years + ' year';
            } else {
                message = years + ' years';
            }
        }

        return `Posted ${message} ago`;
    }

}
