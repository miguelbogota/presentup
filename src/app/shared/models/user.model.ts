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
  descriptions: string[];
  design: string;

  settings: {
    subscription: string;
  };
}

// Function returns an empty user
export const newUser = (): IUser => {
  return {
    uid: '',
    email: '',
    name: '',
    username: '',
    recoveryEmail: '',
    phone: '',
    location: '',
    birth: new Date(),
    gender: '',
    title: '',
    img: '',
    descriptions: [],
    design: '',
    settings: {
      subscription: ''
    }
  };
};

// Interface represent a user in the formx
export interface IUserForm  {
  user?: IUser;
  password?: string;
  confirmPassword?: string;
  area?: string;
}

// Function return a new user form blank
export const newUserForm = (): IUserForm => {
  return {
    user: newUser(),
    password: '',
    confirmPassword: '',
    area: ''
  };
};

// Annonimous user
export interface IAnonymousUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
}
