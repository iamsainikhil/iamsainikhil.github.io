import { Comment } from './comment';
import { Like } from './like';

export class Blog {
    id?: string;
    title: string;
    tags: {string};
    shortTitle: string;
    comments: Comment;
    likes: Like;
    dateAdded: any;
    time: string;
    data: string;
}
