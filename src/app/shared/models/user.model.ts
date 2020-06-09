import { IPublicProfile, IPrivateProfile, IPartialProfile } from './profile.model';

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
  profile: {
    public: IPublicProfile[]; // Subcollection
    private: IPrivateProfile[]; // Subcollection
    partial: IPartialProfile[]; // Subcollection
  };
}
