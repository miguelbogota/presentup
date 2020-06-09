import { firestore } from 'firebase/app';
import { IMedia } from './media.model';

/**
 * User fields that can be either public or private.
 */
export interface IPartialProfile {
  id: string;
  email?: string;
  phone?: string;
  status?: string;
  mood?: string;
}

/**
 * Public profile for an user.
 */
export interface IPublicProfile {
  id: string;
  username: string;
  displayName: string;
  photoUrl?: string;
  coverUrl?: string;
  title?: string;
  about: string; // Max 3800 characters

  location?: string; // For now is a string, in the future will be a geo point
  imagesUrl?: IMedia[]; // Array
  language: string;
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
export interface IPrivateProfile extends IPartialProfile {
  recoveryEmail?: string;
  birth: firestore.Timestamp;
  gender?: string;
}

/**
 * User profile if the user requesting it is signed in.
 */
export interface IProfileIn extends IPublicProfile, IPrivateProfile {
}

/**
 * User profile if the user requesting it is signed out.
 */
export interface IProfileOut extends IPublicProfile, IPartialProfile {
}
