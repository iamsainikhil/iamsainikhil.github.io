import { Comment } from './comment';

export class Project {
    id?: string;
    title: string;
    url: string;
    shortInfo: string;
    comments: Comment;
    likes: number;
    dateAdded: any;
}
