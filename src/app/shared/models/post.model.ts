import { firestore } from 'firebase/app';
import { IMedia } from './media.model';
import { IComment } from './comment.model';

/**
 * Interface represents a post a user share in their profiles.
 */
export interface IPost {
  id: string;
  uid: string;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  title?: string;
  isPublic: boolean;
  text: string; // Array - Max 3800 characters
  // location?: firestore.GeoPoint; // Maybe in the future
  media?: IMedia[]; // Array - Max 8 images
  comments?: IComment[]; // Subcollection
  likeUid?: string[]; // Subcollection
  mentions?: string[]; // Array - Makred with '@' This will have all the uids for the mentions in the post
  hashtags?: string[]; // Array - Makred with '#' This will have all the hashtags in the post
  // Data aggregation
  likeCount: number;
  commentCount: number;
  recentComments: IComment[]; // Array - Last 20 comments
}
