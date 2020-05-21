import { firestore } from 'firebase/app';
import { IMedia } from './media.model';

/**
 * User fields that can be either public or private.
 */
export interface IOptionalProfile {
  email?: string;
  phone?: string;
  location?: string; // For now is a string, in the future will be a geo point
  imagesUrl?: IMedia[]; // Array

  status?: string;
  mood?: string;
}

/**
 * Public profile for an user.
 */
export interface IPublicProfile extends IOptionalProfile {
  username: string;
  photoUrl: string;
  displayName: string;
  title?: string;
  about: string; // Max 3800 characters
  design: string;

  // Data aggregation
  postCount: number;
  projectCount: number;
  followerCount: number;
  followingCount: number;
}

/**
 * Private profile for an user.
 */
export interface IPrivateProfile extends IOptionalProfile {
  recoveryEmail?: string;
  birth: firestore.Timestamp;
  gender?: string;
  subscription: string;
}
