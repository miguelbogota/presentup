import { firestore } from 'firebase/app';
import { Post } from './post.model';
import { Media } from './media.model';

/**
 * Project for a user portfolio.
 */
export interface Project extends Post {
  url?: string;
  position?: string;
  previewUrl: Media;
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
