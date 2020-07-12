import { firestore } from 'firebase/app';
import { Media } from './media.model';

/**
 * Review in the brand account.
 */
export interface BrandReview {
  uid: string;
  createdAt: firestore.FieldPath;
  star: number; // 0.0 - 5.0 with only 1 decimal
  review: string; // Max 3000 characters
  reply: string; // Brand reply by one of the uid owners
}

/**
 * Services a brand offers in the location.
 */
export interface BrandServices {
  name: string;
  rules: string[]; // Max 20
  description: string; // Max 2000 characters
  instructions: string; // Max 2000 characters
}

/**
 * Basic brand account from the db firestore and authentication
 */
export interface Brand {
  id: string;
  uid: string[];

  // Public
  username: string;
  displayName: string;
  photoUrl?: string;
  coverUrl?: string;
  title?: string; // Might change/delete
  about: string; // Max 3800 characters
  language: string;
  design: string;

  email?: string;
  phone?: string;
  imagesUrl?: Media[]; // Array - Max 15
  location?: string; // For now is a string, in the future will be a geo point
  status?: string;
  mood?: string;

  reviews: BrandReview[]; // Subcollection
  services: BrandServices[]; // Array - Max 30
  beforeYouGo: string[]; // Location rules and guides for new users

  // Data aggregation
  postCount: number;
  projectCount: number;
  followerCount: number;
  followingCount: number;
  reviewsCount: number;
  reviewsAverage: number;
}
