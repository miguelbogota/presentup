import { Injectable } from '@angular/core';
import { IUser } from '../../../shared/models/user.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collectionName = 'users'; // Property for the collections name
  private collection: AngularFirestoreCollection<IUser>; // Collection with the users

  // Contructor with dependency injection
  constructor(
    private afs: AngularFirestore
  ) {
    this.collection = this.afs.collection(this.collectionName); // Store collection
  }

  // Function saves a user in the db
  createUser(user: IUser): Promise<void> {
    const id = user.uid; // Store id before deleting it
    delete user.uid; // Delete user id since is unnecesary in the db
    return this.collection.doc(id).set(user); // Upload the user to the db
  }

  // Return all the users in the db
  getUsers(): Observable<IUser[]> {
    // Return an observable with all the users
    return this.collection
      .valueChanges({ idField: 'id' });
  }

  // Returns only one user by id
  getUserWithId(id: string): Observable<IUser> {
    // Return one user with the id
    return this.collection.doc(id)
      .snapshotChanges()
        .pipe(
          // Map the user to have the id
          map(a => {
            return {
              ...a.payload.data() as IUser,
              id: a.payload.id
            };
          })
        );
  }

  // Returns only one user by a property in the object
  getUserWithProperty(type: string, property: any): Observable<IUser> {
    // Return one user with the custom property
    return this.afs.collection<IUser>(this.collectionName, ref => ref.where(type, '==', property))
      .valueChanges({ idField: 'id' })
        // Return the first element since will only have one
        .pipe(map(b => b[0]));
  }

  // Function deletes an user by id
  deleteUser(id: string): Promise<void> {
    return this.collection.doc(id).delete(); // Delete user
  }

}
