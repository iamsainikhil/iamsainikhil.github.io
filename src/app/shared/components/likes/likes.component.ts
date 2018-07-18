import { Component, Input, OnInit } from '@angular/core';
import { LikesCommentsService } from '../../services/likes-comments.service';
import { GAService } from './../../services/ga.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

    /**
   * condition to show/hide empty/filled love icon
   */
  showIncrementIcon = true;

  /**
   * likesData, docId, and collectionName from other components
   */
  likesData: any;
  @Input() docId: string;
  @Input() collectionName: string;

  likesArray = [];

  constructor(
    private likesCommentsService: LikesCommentsService,
    private gaService: GAService
  ) { }

  ngOnInit() {
    this.getLikesData();

    // check if the present docId is already liked
    if (localStorage.getItem('likes') !== null) {
      this.likesArray = JSON.parse(localStorage.getItem('likes'));
      if (this.likesArray.includes(this.docId)) {
        console.log('already liked');
        this.showIncrementIcon = false;
      }
    }
  }

  getLikesData() {
    this.likesData = this.likesCommentsService.getLikesData(this.docId, this.collectionName);
  }

  loveIncrementClick(count, id) {
    this.showIncrementIcon = false;
    this.likesCommentsService.incrementLikes(this.collectionName, this.docId, count, id);
    this.gaService.emitEvent(`${this.docId}-increment-likes`, 'increment-likes', 'love-click');
    // store the docId under likesArray in localStorage
    this.likesArray.push(this.docId);
    localStorage.setItem('likes', JSON.stringify(this.likesArray));
  }

  loveDecrementClick(count, id) {
    this.showIncrementIcon = true;
    this.likesCommentsService.decrementLikes(this.collectionName, this.docId, count, id);
    this.gaService.emitEvent(`${this.docId}-decrement-likes`, 'decrement-likes', 'love-click');
    this.updateLikes();
  }

  updateLikes() {
    if (localStorage.getItem('likes') !== null) {
      this.likesArray = JSON.parse(localStorage.getItem('likes'));
      // if the docId already present in localStorage, delete it
      if (this.likesArray.includes(this.docId)) {
        const i = this.likesArray.indexOf(this.docId);
        this.likesArray.splice(i, 1);
        localStorage.setItem('likes', JSON.stringify(this.likesArray));
      } else {
        // just decrement the likes number
      }
    }
  }

}
