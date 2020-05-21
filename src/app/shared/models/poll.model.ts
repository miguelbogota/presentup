import { firestore } from 'firebase/app';
import { IPost } from './post.model';

/**
 * Represents an answer for the poll.
 */
export interface IPollResponse {
  id: string;
  uid: string;
  value: string;
}

/**
 * This is poll a user can share to interact with their followers.
 * It extends to the post interface but add a poll system.
 */
export interface IPoll extends IPost {
  votes: IPollResponse[]; // Subcollection - All the votes of the users.
  finishTime: firestore.FieldValue; // Use serverTimestamp for field
  options: string[]; // Array - Max 30 options
  extendible: boolean; // Can add more options to poll
  // Data aggregation
  votesCount: number[]; // Array
}
