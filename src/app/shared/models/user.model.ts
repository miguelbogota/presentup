import { IPublicProfile } from './profile.model';

// Logged user
export interface IUser {
  uid: string;
  email: string;
  name: string;

  username: string;
  recoveryEmail?: string;
  phone?: string;
  location: string;
  birth: Date;
  gender: string;

  title?: string;
  img: string;
  description: string;
  design: string;

  settings: {
    subscription: string;
  };
}

// --------------------------------------------------------------------------------------------------------
/**
 * Basic user from the db firestore and authentication
 */
export interface IBasicUser {
  uid: string;
  isPublic: boolean;
  public: IPublicProfile[]; // Subcollection
  private: IPublicProfile[]; // Subcollection
}
