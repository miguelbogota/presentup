import { firestore } from 'firebase/app';

/**
 * Promo code for the check out.
 */
export interface PromoCode {
  id: string;
  type: 'public' | 'private';
  description: string;
  isActive: boolean;
  reasonDeactivated?: string;
  code: string; // All upper case
  discount: number;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  expiresAt: firestore.FieldValue; // Use serverTimestamp for field
  deactivatedAt?: firestore.FieldValue; // Use serverTimestamp for field
}

/**
 * Subcollection of the promo codes of a user.
 */
export interface UserPromoCode extends PromoCode {
  isUsed: boolean;
  usedAt?: firestore.FieldValue; // Use serverTimestamp for field
}
