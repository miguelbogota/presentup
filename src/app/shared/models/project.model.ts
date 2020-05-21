import { firestore } from 'firebase/app';
import { IPost } from './post.model';
import { IMedia } from './media.model';

/**
 * Project for a user portfolio.
 */
export interface IProject extends IPost {
  url?: string;
  position?: string;
  previewUrl: IMedia;
  gitUrl?: string;
  externalUrl?: string;
  startedAt: firestore.FieldValue; // Use serverTimestamp for field
  /**
   * Is the user currently working in the project.
   */
  current: boolean;
  endedAt?: firestore.FieldValue; // Use serverTimestamp for field
  company?: string;
}
