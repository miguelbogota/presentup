import { Injectable } from '@angular/core';
import { WhereFilterOp } from '@firebase/firestore-types';
import { Post } from '@app-models/post.model';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private collectionName = 'posts'; // Property for the collections name
  private collection: AngularFirestoreCollection<Post>; // Collection with the users

  constructor(
    private afs: AngularFirestore
  ) {
    // Store collection
    this.collection = this.afs.collection(this.collectionName);
  }

  /**
   * Function get the user from firestore and removes all the
   * sensitive information as a stream.
   * @param postId User id of the user to get.
   */
  public watchPost(postId: string): Observable<Post> {
    // Return one user with the id
    return this.collection.doc(postId)
      .snapshotChanges()
      // Map the user to have the id
      .pipe(
        // Map and remove sensitive information
        map(a => a.payload.exists ? ({ uid: a.payload.id, ...a.payload.data() as Post }) : null)
      );
  }

  /**
   * Function get the user from firestore filtered by a custom
   * property and value and removes all the sensitive information as a stream.
   * @param property Property to filter the search.
   * @param operator Operator to query the search.
   * @param value Value to match the filter.
   */
  public watchPostWith(property: string, operator: WhereFilterOp, value: any): Observable<Post[]> {
    // Return one user with the custom property
    return this.afs.collection<Post>(this.collectionName, ref => ref.where(property, operator, value))
      .valueChanges({ idField: 'id' })
      // Return the first element since will only have one
      .pipe(
        // Map and remove sensitive information
        map(b => b ? b : null)
      );
  }

}
