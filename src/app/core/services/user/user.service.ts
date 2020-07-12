import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { StorageSLConfig, StorageLS } from '@app-core/classes/storage/storagels';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { User } from '@app-models/user.model';
import { WhereFilterOp } from '@firebase/firestore-types';

/**
 * Service calls and writes the user from the Firestore db.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collectionName = 'users'; // Property for the collections name
  private collection: AngularFirestoreCollection<User>; // Collection with the users

  constructor(
    private afs: AngularFirestore
  ) {
    // Store collection
    this.collection = this.afs.collection(this.collectionName);
  }

  /**
   * Functions add a user from the value of the form.
   * @param user User form value to add.
   */
  public async setUser(user: any): Promise<void> {
    const uid = user.uid; // Get uid
    delete user.uid; // Delete uid since it won't be store in firestore
    // Add new user data
    return await this.collection.doc(uid)
      .set(user, { merge: true });
  }

  /**
   * Function get the user from firestore and removes all the
   * sensitive information as a stream.
   * @param userId User id of the user to get.
   */
  public watchUser(userId: string): Observable<User> {
    // Return one user with the id
    return this.collection.doc(userId)
      .snapshotChanges()
      // Map the user to have the id
      .pipe(
        // Map and remove sensitive information
        map(a => a.payload.exists ? this.removeSensitiveInfo({ uid: a.payload.id, ...a.payload.data() as User }) : null)
      );
  }

  /**
   * Function get the user from firestore filtered by a custom
   * property and value and removes all the sensitive information as a stream.
   * @param property Property to filter the search.
   * @param operator Operator to query the search.
   * @param value Value to match the filter.
   */
  public watchUserWith(property: string, operator: WhereFilterOp, value: any): Observable<User> {
    // Return one user with the custom property
    return this.afs.collection<User>(this.collectionName, ref => ref.where(property, operator, value))
      .valueChanges({ idField: 'uid' })
      // Return the first element since will only have one
      .pipe(
        // Map and remove sensitive information
        map(b => b[0] ? this.removeSensitiveInfo(b[0]) : null)
      );
  }

  /**
   * Function get the user from firestore and removes all the
   * sensitive information.
   * @param userId User id of the user to get.
   */
  public getUser(userId: string): Promise<User> {
    // Return one user with the id
    return this.watchUser(userId).pipe(first()).toPromise();
  }

  /**
   * Function get the user from firestore filtered by a custom
   * property and value and removes all the sensitive information.
   * @param property Property to filter the search.
   * @param operator Operator to query the search.
   * @param value Value to match the filter.
   */
  public getUserWith(property: string, operator: WhereFilterOp, value: any): Promise<User> {
    // Return one user with the custom property
    return this.watchUserWith(property, operator, value).pipe(first()).toPromise();
  }

  /**
   * Function deletes a user along with all their content
   * @param userId User id to delete.
   */
  public async deleteUser(userId: string): Promise<void> {
    return this.collection.doc(userId).delete(); // Delete user
  }

  /**
   * Functions removes the sensitive information of a firestore
   * document and return it depending on the current user signed.
   * @param user Firestore user to remove the data.
   */
  private removeSensitiveInfo(user: any): User {
    // USer auth state
    const s: StorageSLConfig = { key: '1jK9uhkJgLY0MYnfYTOTtpWsy4l4', type: 'local' };
    const storage = new StorageLS(s);
    // Validate if the user is signed with the right account
    if (storage.get<User>() && storage.get<User>().uid === user.uid) {
      return user;
    }
    // If user is unsigned in or is no the one this account belong delete the information
    else {
      // Deletes all the sensitive information
      if (user.public) {
        Object.keys(user.public).forEach(key => {
          if (!user.public[key].isPublic) { delete user.public[key]; }
        });
      }
      if (user.private) {
        delete user.private;
      }
      // Put together and return
      return user;
    }
  }

}
