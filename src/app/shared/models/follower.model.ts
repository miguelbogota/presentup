import { firestore } from 'firebase/app';

/**
 * Preview for the post in the data aggregation for the followers.
 */
export interface PostPreview {
  id: string;
  createdAt: firestore.FieldValue;
}

/**
 * Follower list.
 */
export interface Follow {
  id: string;
  uid: string;
  lastPost?: firestore.FieldValue;
  recentPosts: PostPreview[]; // Array
  followedBy: string[]; // Array
}
