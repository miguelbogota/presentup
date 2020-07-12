import { firestore } from 'firebase/app';

/**
 * Will show the user notification and store them to sync across their devices.
 */
export interface Notification {
  id: string;
}
