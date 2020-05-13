import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '@app-core/http/user/user.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { StorageLS, IStorageSLConfig } from '@app-core/classes/storage/storagels';
import { IUser } from '@app-models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<IUser>; // Property store the current user logged
  // Storage configuration and service
  s: IStorageSLConfig = { key: '1jK9uhkJgLY0MYnfYTOTtpWsy4l4', type: 'local' };
  private storage = new StorageLS(this.s);

  constructor(
    private afa: AngularFireAuth,
    private userService: UserService
  ) {
    // The current user is the one in the localstorage
    this.user = this.storage.watch;
    // Check for changes in the authentication state
    this.afa.authState.subscribe(user =>  {
      // If user is logged get data from db and cache it, otherwise delete it
      if (user) {
        this.userService.getUserWithId(user.uid).subscribe(u => {
          // Check the info is different and update it
          const isDifferent = JSON.stringify(u) !== JSON.stringify(this.storage.get());
          if (isDifferent) { this.storage.set(u); }
        });
      }
      else { this.storage.delete(); }
    });
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
        user.uid = userCredentials.user.uid;
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
          this.storage.set(user);
          return this.userService.getUserWithId(user.user.uid).pipe(first()).toPromise();
        }
        return null;
      });
  }

  // Function sign in a user with the username
  async signInWithUserName(username: string, password: string): Promise<IUser> {
    // Get the user with the username to get the email to check
    const user = await this.userService.getUserWithProperty('username', username).pipe(first()).toPromise();
    // Try to sign in the user
    return this.afa.signInWithEmailAndPassword(user?.email || '', password)
      .then((uc: firebase.auth.UserCredential) => {
        this.storage.set(user);
        return user; // Return the user logged
      });
  }

  // Function sign in a user with the phone
  async signInWithPhone(phone: number, password: string): Promise<IUser> {
    // Get the user with the phone number to get the email to check
    const user = await this.userService.getUserWithProperty('phone', phone).pipe(first()).toPromise();
    // Try to sign in the user
    return this.afa.signInWithEmailAndPassword(user?.email || '', password)
      .then((uc: firebase.auth.UserCredential) => {
        this.storage.set(user);
        return user; // Return the user logged
      });
  }

  // Function sign out the user from the app
  signOut(): void {
    this.storage.delete();
    this.afa.signOut();
  }

  // Function deletes a sign in user, is required the email and password in order to delete it
  deleteUser(email: string, password: string): void {
    this.afa.signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        await this.userService.deleteUser(user.user.uid);
        await user.user.delete(); // Delete signin
      });
  }

  // Getters & Setters
  get currentUser(): Observable<IUser> { return this.user; }

}
