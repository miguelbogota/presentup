import { firestore } from 'firebase/app';
import { Media } from './media.model';
import { Post } from './post.model';
import { Poll } from './poll.model';
import { Project } from './project.model';

/**
 * Basic user from the db firestore and authentication
 */
export interface User {
  uid: string;
  isPublic: boolean;
  isAnonymous: boolean;
  emailVerified: boolean;

  // Public
  username: string; // Can sign in with property
  displayName: string;
  photoUrl?: string;
  coverUrl?: string;
  title?: string;
  about: string; // Max 3800 characters
  languages: string[];
  design: string;
  // Data aggregation
  postCount: number;
  projectCount: number;
  followerCount: number;
  followingCount: number;
  pins?: Post[] | Poll[] | Project[]; // Max 6

  public: {
    imagesUrl?: {
      value: Media[]; // Array - Max 5
      isPublic: boolean;
    };
    email?: {
      value: string; // Can sign in with property - Must have
      isPublic: boolean;
    };
    location?: {
      value: string; // For now is a string, in the future will be a geo point
      isPublic: boolean;
    };
    phone?: {
      value: string; // Can sign in with property
      isPublic: boolean;
    };
    status?: {
      value: string;
      isPublic: boolean;
    };
    mood?: {
      value: string;
      isPublic: boolean;
    };
  };

  // Private
  private: {
    recoveryEmail?: string;
    birth: firestore.Timestamp;
    gender?: string;
  };
}
