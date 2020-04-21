import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IUser } from '../models/user.model';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Observable<IUser>; // Property store the current user logged

  constructor(
    private afa: AngularFireAuth,
    private userService: UserService
  ) {
    this.currentUser = this.afa.authState.pipe(
      switchMap(user => {
        // If user is logged get data from db
        if (user) { return this.userService.getUserWithId(user.uid); }
        // Otherwise send a null observable
        return of(null);
      })
    );
  }

  // Function store a user and save it
  createUser(user: IUser, password: string): void {
    this.afa.createUserWithEmailAndPassword(user.email, password)
      .then((userCredentials) => {
        // Update the profile of the user with the data
        userCredentials.user.updateProfile({
          displayName: user.name,
          photoURL: user.img
        });
        // Store id in the user to upload to db
        user.id = userCredentials.user.uid;
        // Save user in db
        this.userService.createUser(user);
      });
  }

  // Function sign in a user with the email
  async signInWithEmail(email: string, password: string): Promise<IUser> {
    // Return the user if the logged is succesfull
    return await this.afa.signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user.user) {
          return this.userService.getUserWithId(user.user.uid).pipe(first()).toPromise();
        }
        return null;
      });
  }

  // Function sign in a user with the username
  async signInWithUserName(username: string, password: string): Promise<IUser> {
    // Get the user with the username to get the email to check
    return this.userService.getUserWithProperty('username', username).pipe(first()).toPromise()
      .then((user: IUser) => {
        // Try to sign in the user
        return this.afa.signInWithEmailAndPassword(user?.email || '', password).then((uc: firebase.auth.UserCredential) => {
          return user || null; // Return the user logged
        });
      });
  }

  // Function sign in a user with the phone
  async signInWithPhone(phone: number, password: string): Promise<IUser> {
    // Get the user with the phone number to get the email to check
    return this.userService.getUserWithProperty('phone', phone).pipe(first()).toPromise()
      .then((user: IUser) => {
        // Try to sign in the user
        return this.afa.signInWithEmailAndPassword(user?.email || '', password).then((uc: firebase.auth.UserCredential) => {
          return user || null; // Return the user logged
        });
      });
  }

  // Function sign out the user from the app
  signOut(): void {
    this.afa.signOut();
  }

  // Function deletes a sign in user, is required the email and password in order to delete it
  deleteUser(email: string, password: string): void {
    this.afa.signInWithEmailAndPassword(email, password).then(async (user) => {
      await this.userService.deleteUser(user.user.uid);
      await user.user.delete(); // Delete signin
    });
  }

}
