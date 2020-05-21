import { firestore } from 'firebase/app';

/**
 * Preview for the post in the data aggregation for the followers.
 */
export interface IPostPreview {
  id: string;
  createdAt: firestore.FieldValue;
}

/**
 * Follower list.
 */
export interface IFollow {
  id: string;
  uid: string;
  lastPost?: firestore.FieldValue;
  recentPosts: IPostPreview[];
  followedBy: string[];
}