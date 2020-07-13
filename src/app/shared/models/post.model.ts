import { firestore } from 'firebase/app';
import { Media } from './media.model';
import { Comment } from './comment.model';

/**
 * Interface represents a post a user share in their profiles.
 */
export interface Post {
  id: string;
  uid: string;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  type: 'post' | 'project' | 'poll';
  title?: string;
  isPublic: boolean;
  isPinned: boolean;
  text: string; // Max 3800 characters
  // location?: firestore.GeoPoint; // Maybe in the future
  media?: Media[]; // Array - Max 8 images
  comments?: Comment[]; // Subcollection
  likeUid?: string[]; // Subcollection
  mentions?: string[]; // Array - Makred with '@' This will have all the uids for the mentions in the post
  hashtags?: string[]; // Array - Makred with '#' This will have all the hashtags in the post
  // Data aggregation
  likeCount: number;
  commentCount: number;
  recentComments: Comment[]; // Array - Last 20 comments
}
