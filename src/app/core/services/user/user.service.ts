import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';

import { IPublicProfile, IPrivateProfile, IPartialProfile, IProfileIn, IProfileOut } from '@app-models/profile.model';
import { IBasicUser } from '@app-models/user.model';
import { map, switchMap } from 'rxjs/operators';

/**
 * Internal query to the user.
 */
interface IUserQuery {
  id: string;
  isSignedIn: boolean;
  query?: {
    fieldPath: string;
    opStr: '<' | '<=' | '==' | '>=' | '>' | 'array-contains' | 'array-contains-any' | 'in';
    value: string;
  };
}

/**
 * Service calls and writes the user from the Firestore db.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collectionName = 'users'; // Property for the collections name
  private collection: AngularFirestoreCollection<IBasicUser>; // Collection with the users

  constructor(
    private afs: AngularFirestore
  ) {
    // Store collection
    this.collection = this.afs.collection(this.collectionName);
  }

  /**
   * Add a new user with the profile the Firestore db.
   *
   * @param user User to add in Firestore.
   */
  public async create(user: IBasicUser, ): Promise<void> {
    const uid = user.uid; // Get uid
    // Get each profile without the id
    const profiles = {
      public: user.profile.public.map(u => { delete u.id; return u; }),
      private: user.profile.private.map(u => { delete u.id; return u; }),
      partial: user.profile.partial.map(u => { delete u.id; return u; })
    };
    delete user.uid; // Remove uid
    delete user.profile; // Remove profile object
    // Add user
    this.addProfile('public', uid, profiles.public);
    this.addProfile('private', uid, profiles.private);
    this.addProfile('partial', uid, profiles.partial);
  }

  /**
   * Returns one user with id from Firestore.
   */
  public getUserWithId(id: string, isSignedIn: boolean): Observable<IProfileIn | IProfileOut> {
    // Return an observable with all the users
    return this.getUser({ id, isSignedIn });
  }

  /**
   * Private function to map the users from Firestore to an object.
   * @param query Query and order for the users.
   */
  private getUser(query: IUserQuery): Observable<any> {
    const user = this.collection.doc<IBasicUser>(query.id).snapshotChanges();
    const pub = this.getProfile<IPublicProfile>('public', query.id);
    const pri = this.getProfile<IPrivateProfile>('private', query.id);
    const par = this.getProfile<IPartialProfile>('partial', query.id);

    return user
      .pipe(
        map(a => ({ uid: a.payload.id, ...a.payload.data() as IBasicUser })),
        switchMap(a => {

          // Public, partial and private
          if (query.isSignedIn) { return this.combineProfiles(a, pub, par, pri); }
          // Public and partial
          else if (a.isPublic) { return this.combineProfiles(a, pub, par); }
          // Public only
          return this.combineProfiles(a, pub);

        })
      );
  }

  /**
   * Function return the user profile.
   * @param profile Type of profile to get.
   * @param userId Uiser id to get the profile of.
   */
  public getProfile<T>(profile: 'public' | 'partial' | 'private', userId: string): Observable<T[]> {
    return this.collection
      .doc(userId)
      .collection<T>(profile)
      .valueChanges({ idField: 'id' })
      .pipe(
        map(doc => doc.map(a => ({ ...a as T })))
      );
  }

  /**
   * Function adds a new profile to a specific user.
   */
  public addProfile<T>(profile: 'public' | 'partial' | 'private', userId: string, value: T[]): void {
    value.forEach(async (p: T) => {
      // Add public partial
      await this.collection.doc(userId).collection(profile).add(p);
    });
  }

  /**
   * Function combines all the profiles into 1.
   */
  private combineProfiles(
    insert: {},
    pub: Observable<IPublicProfile[]>,
    par?: Observable<IPartialProfile[]>,
    pri?: Observable<IPrivateProfile[]>
  ): Observable<any> {
    if (par && pri) {
      return combineLatest([pub, par, pri])
        .pipe(map(g => ({ ...insert, profile: { public: g[0], partial: g[1], private: g[2] } })));
    }
    else if (par) {
      return combineLatest([pub, par])
        .pipe(map(g => ({ ...insert, profile: { public: g[0], partial: g[1] } })));
    }
    return pub
      .pipe(map(g => ({ ...insert, profile: { public: g[0], } })));
  }

}
