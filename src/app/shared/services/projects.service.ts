import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Like } from '../models/like';
import { Story } from '../models/story';
import { Project } from './../models/project';


@Injectable()
export class ProjectsService {

    /**
     * collections
     */
    projectCollection: AngularFirestoreCollection<Project>;
    storyCollection: AngularFirestoreCollection<Story>;
    likesCollection: AngularFirestoreCollection<Like>;
    commentsCollection: AngularFirestoreCollection<Comment>;

    /**
     * data
     */
    projects: Observable<any[]>;
    project: Observable<Project>;
    story: Observable<any[]>;
    likes: Observable<any[]>;
    comments: Observable<any[]>;

    /**
     * document
     */
    projectDoc: AngularFirestoreDocument<Project>;
    likesDoc: AngularFirestoreDocument<Like>;

    showLoader: boolean;
    docExists: any;

    constructor(
        private afs: AngularFirestore
    ) {}

    /**
     * Get data from projects collection in firestore
     */
    getProjectsData() {
        this.projects = this.afs.collection('projects', ref => ref.orderBy('dateAdded', 'desc')).snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Project;
              const id = a.payload.doc.id;
              return {id, data};
            });
        });
        return this.projects;
    }

    // filter events on data from projects collection //

     /**
     * Get limited data from projects collection in firestore
     */
    getLimitedProjectsData(number) {
        const projectCollection =  this.afs.collection<Project>('projects', ref => ref.limit(number));
        this.projects = projectCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Project;
              const id = a.payload.doc.id;
              return {id, data};
            });
        });
        return this.projects;
    }

    /**
     * Get data from projects collection based on 'where' query
     */
    getQueriedProjectsData(field: string, operator: any, value: any) {
        const projectCollection =  this.afs.collection<Project>('projects', ref => ref.where(field, operator, value));
        this.projects = projectCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Project;
              const id = a.payload.doc.id;
              return {id, data};
            });
        });
        return this.projects;
    }

    /**
     * Get data from projects collection based on 'orderBy' query
     */
    getOrderedProjectsData(field: string) {
        this.projectCollection =  this.afs.collection<Project>('projects', ref => ref.orderBy(field));
        this.projects = this.projectCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Project;
              const id = a.payload.doc.id;
              return {id, data};
            });
        });
        return this.projects;
    }

    // filter events end //

    /**
     * get project document data
     */
    getProjectData(id: string) {
        this.projectDoc = this.afs.doc<Project>('projects/' + id);
        this.project = this.projectDoc.valueChanges();

        return this.project;
    }

    /**
     * get story data from project collection
     */
    getStoryData(Id: string) {
        this.storyCollection = this.afs.collection('projects/' + Id + '/story');
        this.story = this.storyCollection.snapshotChanges().map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as Story;
              const id = a.payload.doc.id;
            //   new timestamp sent from firestore need to be converted to date
            //   const timestampStart = data.timeline.startDate;
            //   const timestampEnd = data.timeline.endDate;
            //   data.timeline.startDate = timestampStart.toDate();
            //   data.timeline.endDate = timestampEnd.toDate();
              return {id, data};
            });
        });

        return this.story;
    }

}
