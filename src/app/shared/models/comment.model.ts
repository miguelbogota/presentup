import { firestore } from 'firebase/app';
import { IMedia } from './media.model';

/**
 * Interface represents a comment in the app.
 */
export interface IComment {
  id: string;
  uid: string;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  text: string; // Array - Max 900 characters
  media?: IMedia[]; // Array
  comments: IComment[]; // Subcollection
  type: 'post' | 'project' | 'poll'; // Type of comment for query
  likeUid: string[]; // Subcollection
  mentions?: string[]; // Array - Makred with '@' This will have all the uids for the mentions in the post
  hashtags?: string[]; // Array - Makred with '#' This will have all the hashtags in the post
  // Data aggregation
  likeCount: number;
  commentCount: number;
  recentComments: IComment[]; // Array - Last 20 comments
}