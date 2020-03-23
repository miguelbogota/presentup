// Logged user
export interface IUser {
  uid: string;
  name: string;
  title?: string;
  img: string;
  descriptions: string[];
  email: string;
  phone?: number;
  password: string;
  settings: {
    design: string;
  };
}

// Annonimous user
export interface IAnonymousUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
}
