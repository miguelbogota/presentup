import { firestore } from 'firebase/app';
import { IMedia } from './media.model';

/**
 * The message send in a chat by 2 different users.
 */
export interface IMessage {
  id: string;
  uid: string;
  createdAt: firestore.FieldValue; // Use serverTimestamp for field
  text: string;
  refMessage?: string; // If refers to another message include id
  media?: IMedia[]; // Array
  hashtags: string[]; // Makred with '#' This will have all the hashtags in the message
  reactions: string[];
}

/**
 * Role for the user in a chat.
 */
export interface IChatUserRole {
  user: boolean; // Default true
  admin?: boolean; // Only onwers of a group chat and assignees by other admins
  moderator?: boolean; // Assign but admin only
}

/**
 * User with role to modify the settings of the chat.
 */
export interface IChatUser {
  uid: string;
  alias: string;
  role: IChatUserRole;
}

/**
 * Chat shared by two users.
 */
export interface IChat {
  id: string;
  createdAt: firestore.FieldValue;
  chatUsers: IChatUser[]; // Array - Uid of the two users
  chatMessages: IMessage[]; // Subcollection
  // Data aggregation
  messagesCount: number;
  lastMessage: IMessage[]; // Array - Last 20 messages
}

/**
 * Chat shared multiple users in a group.
 */
export interface IChatGroup {
  id: string;
  name: string;
  imageUrl?: string;
  description?: string; // Up to 500 characters
  createdAt: firestore.FieldValue;
  chatUsers: IChatUser[]; // Array - Up to 30 user per group
  chatMessages: IMessage[]; // Subcollection
  // Data aggregation
  messagesCount: number;
  lastMessage: IMessage[]; // Array - Last 20 messages
}
