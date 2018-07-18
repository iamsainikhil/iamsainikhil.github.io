import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Contact } from '../models/contact';
import { Ip } from '../models/ip';

@Injectable()
export class ContactService {

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
     * Get data from About collection in firestore
     */
    addData(data) {
        const contactCollection = this.afs.collection<Contact>('contact').doc(this.id);
        // get location details
        this.http.get('https://ipinfo.io').subscribe(
          (res: Ip) => {
            contactCollection.set({
                email: data.email,
                message: data.message,
                dateAdded: data.dateAdded,
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
            contactCollection.set(data);
          }
        );
    }
}
