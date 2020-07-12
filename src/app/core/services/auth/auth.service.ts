import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user/user.service';
import { StorageLS, StorageSLConfig } from '@app-core/classes/storage/storagels';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '@app-models/user.model';

/**
 * Service to authenticate the user in multiple forms.
 * You can also have access to the auth state in
 * different ways.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // User state on the app
  public userState: User;
  public userStateChanges: Observable<User>;

  // State will be store in the localstorage to access faster to it
  private s: StorageSLConfig = { key: '1jK9uhkJgLY0MYnfYTOTtpWsy4l4', type: 'local' };
  private storage = new StorageLS(this.s);

  constructor(
    private afa: AngularFireAuth,
    private userService: UserService
  ) {
    // The current user is the one in the localstorage
    this.userStateChanges = this.storage.watch;
    this.userState = this.storage.get<User>();

    // Check for changes in the authentication state
    this.afa.authState.subscribe((user: firebase.User) => {
      // If user is logged get data from db and cache it, otherwise delete it
      if (user) {
        this.userService.watchUser(user.uid)
          .subscribe(u => {
            // Check the info is different and update it
            const isDifferent = JSON.stringify(u) !== JSON.stringify(this.storage.get());
            if (isDifferent) { this.storage.set(u); }
          });
        // Update user state
        this.userState = this.storage.get<User>();
      }
      else { this.storage.delete(); }
    });
  }

  /**
   * Function will allow to sign up into the app either with an email and password
   * or anonymously and will return a promise with the user signed up.
   * @param provider Provider to sign up the user.
   * @param user User data to store in firestore.
   * @param password Password to register the new account.
   */
  public async signUp(provider: 'email' | 'anonymous', user: any, password?: string): Promise<User> {
    // Validate sign up provider
    switch (provider) {
      // Normal sign up by email
      case 'email':
        // Sign up the user and save uid
        const userAuth = await this.afa.createUserWithEmailAndPassword(user.public.email.value, password);
        user.uid = userAuth.user.uid;
        // Store user data in firestore
        await this.userService.setUser(user);
        // Return user with uid
        return user;

      // Sign up anonymously
      case 'anonymous':
        // Sign up the user
        const userAnon = await this.afa.signInAnonymously();
        // Data to store in firestore
        const dataAnon = {
          uid: userAnon.user.uid,
          displayName: user.displayName,
          username: user.username,
          isAnonymous: true
        };
        // Store user data in firestore
        await this.userService.setUser(dataAnon);
        // Return user with uid
        return { ...dataAnon, uid: userAnon.user.uid } as User;
    }
  }

  /**
   * Function will allow to sign in to the app and will return a promise
   * with the user signed in.
   * @param email If profiver is credential this is required with the value.
   * @param password If profiver is credential this is required with the password.
   */
  public async signIn(email: string, password: string): Promise<User> {
    // Sign in with email
    const credEmail = await this.afa.signInWithEmailAndPassword(email, password);
    // If sign in is successful return the firestore user
    if (credEmail) {
      return await this.userService.getUser(credEmail.user.uid);
    }
    return null;
  }

  /**
   * Function sign out the current signed in user.
   */
  public async signOut(): Promise<void> {
    if (!this.userState) { throw new Error('No user is currently signed in.'); }
    const isAnonymous = this.userState.isAnonymous; // Know if the current user is anonymous
    const uid = this.userState.uid; // Save current uid to delete if is anonymous
    // Validate if the user is anonymous to delete the account on sign out
    if (isAnonymous) {
      // Delete firestore profile
      await this.userService.deleteUser(uid);
      // Delete auth account
      await this.deleteAuth();
    }
    else {
      await this.afa.signOut(); // Sign out the current user if is not anonymous
    }
  }

  /**
   * Function will delete the auth method of the current signed in user.
   */
  public async deleteAuth(): Promise<void> {
    // Delete auth account
    const authUser = await this.afa.authState.pipe(first()).toPromise();
    this.storage.delete();
    await authUser.delete();
  }

}
