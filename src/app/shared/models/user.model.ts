// Logged user
export interface IUser {
  uid: string;
  email: string;
  name: string;

  username: string;
  recoveryEmail?: string;
  phone?: number;
  location: string;
  birth: Date;
  gender: string;

  title?: string;
  img: string;
  descriptions: string[];
  design: string;

  settings: {
    subscription: string;
  };
}

// Annonimous user
export interface IAnonymousUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
}
