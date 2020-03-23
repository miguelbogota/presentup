import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collectionName = 'users'; // Property for the collections name
  userCollection: AngularFirestoreCollection; // Collection with the users

  // Contructor with dependency injection
  constructor(
    private afs: AngularFirestore
  ) {
    this.userCollection = this.afs.collection(this.collectionName); // Store collection
  }

  // Return all the users in the db
  getUsers(): Observable<IUser[]> {
    // Return an observable with all the users
    return this.userCollection.snapshotChanges().pipe(
      // Map each user to have the uid
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IUser;
        data.uid = a.payload.doc.id;
        return data;
      }))
    );
  }

  // Returns only one user by uid
  getUser(uid: string): Observable<IUser> {
    // Return one user with the uid
    return this.userCollection.doc(uid).snapshotChanges().pipe(
      // Map the user to have the uid
      map(a => {
        // If users exists return it with uid
        if (a.payload.exists) {
          const data = a.payload.data() as IUser;
          data.uid = a.payload.id;
          return data;
        }
        // Otherwise return null
        else { return null; }
      })
    );
  }

  // Function deletes an user by uid
  deleteUser(uid: string): void {
    this.userCollection.doc(uid).delete(); // Delete user
  }

}
