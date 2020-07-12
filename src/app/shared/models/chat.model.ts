import { firestore } from 'firebase/app';
import { Media } from './media.model';

/**
 * The message send in a chat by 2 different users.
 */
export interface Message {
  id: string;
  uid: string;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  text: string;
  refMessage?: string; // If refers to another message include id
  media?: Media[]; // Array
  hashtags: string[]; // Makred with '#' This will have all the hashtags in the message
  reactions: string[];
}

/**
 * Role for the user in a chat.
 */
export interface ChatUserRole {
  user: boolean; // Default true
  admin?: boolean; // Only onwers of a group chat and assignees by other admins
  moderator?: boolean; // Assign by admin only
}

/**
 * User with role to modify the settings of the chat.
 */
export interface ChatUser {
  uid: string;
  alias: string;
  role: ChatUserRole;
}

/**
 * Chat shared by two users.
 */
export interface Chat {
  id: string;
  createdAt: firestore.FieldValue;
  chatUsers: ChatUser[]; // Array - Uid of the two users
  chatMessages: Message[]; // Subcollection
  // Data aggregation
  messagesCount: number;
  lastMessage: Message[]; // Array - Last 20 messages
}

/**
 * Chat shared multiple users in a group.
 */
export interface ChatGroup {
  id: string;
  name: string;
  imageUrl?: string;
  description?: string; // Up to 500 characters
  createdAt: firestore.FieldValue;
  chatUsers: ChatUser[]; // Array - Up to 30 user per group
  chatMessages: Message[]; // Subcollection
  // Data aggregation
  messagesCount: number;
  lastMessage: Message[]; // Array - Last 20 messages
}
