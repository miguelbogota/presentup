import { firestore } from 'firebase/app';
import { Media } from './media.model';

/**
 * Interface represents a comment in the app.
 */
export interface Comment {
  id: string;
  uid: string;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  text: string; // Array - Max 900 characters
  media?: Media[]; // Array
  comments: Comment[]; // Subcollection
  type: 'post' | 'project' | 'poll'; // Type of comment for query
  likeUid: string[]; // Subcollection
  mentions?: string[]; // Array - Makred with '@' This will have all the uids for the mentions in the post
  hashtags?: string[]; // Array - Makred with '#' This will have all the hashtags in the post
  // Data aggregation
  likeCount: number;
  commentCount: number;
  recentComments: Comment[]; // Array - Last 20 comments
}