import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { firestore } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '@app-core/services/user/user.service';
import { map, switchMap } from 'rxjs/operators';
import { IFollow, IPostPreview } from '@app-models/follower.model';
import { IPost } from '@app-models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate,
    private afs: AngularFirestore,
    private userS: UserService
  ) {}

  ngOnInit(): void {
    this.reloadCache();
    // pLII1HPZvrXpYaQTZypVtqE0bl83

    this.userS.getUserWithId('pLII1HPZvrXpYaQTZypVtqE0bl83', false).subscribe(u => {
      console.log(u);
    });

    /*
    // Users are up to 18
    const users = [
      'Vm4t4GUpzdDzRKFnipDn',
      'KSCWlACJuDUYZnfUrLXI',
      'IOnPqynbxipc8hsYMoSq',
      'nQqhqd12dNfgn8W1mTUT',
      'IPegY1r3cYXjdmpBNoWM',
      'X6764WqgrHhdQZeIzLd9',
      '7BVIMlTzkU6tEZOAc8uN',
      'FJKDIW7eIpCmo3x2cFIt',
      'gPOvvfQkBd3VTKgmbR5T',
      'GUbzARldsYO6Acn33NF2',
      'fTrVZu9LT7a6HLCokt1R',
      'Co5rgKEGG2Ha66j25WOp',
      'uWqhNqRovDj95I8X6B7H',
      'uk29zOeSYLrPcLsKkGDV',
      'mdrwT2P9szlvO6CUd36T',
      '30Qphz7ByLE1a9BVgLVf',
      'nvjn9nmCzsjKZDceK7Ac',
      '0YBw8gEz7yVkM9L2QDrX'
    ];
    // Get posts from followers
    this.afs.collection<IFollow>('followers', ref => {
      return ref
        .where('followedBy', 'array-contains', users[0])
        .orderBy('lastPost', 'desc')
        .limit(10);
    })
    .get()
    .pipe(
      map((docRef) => docRef.docs.reduce((acc: IPostPreview[], cur) => acc.concat(cur.data().recentPosts), [])),
      switchMap((value: IPostPreview[]) => {
        // Sort by date all of the posts
        const sortedArray = value.sort((a: any, b: any) => b.createdAt - a.createdAt);
        const ids = sortedArray.map((preview: IPostPreview) => preview.id).slice(0, 10);
        // Return the values from the posts
        return this.afs.collection('posts', ref => {
          return ref
            .where('id', 'in', ids)
            .orderBy('createdAt', 'desc')
            .limit(10);
        }).valueChanges();
      })
    )
    .subscribe((posts: IPost[]) => {
      posts.forEach(post => {
        console.log(post.uid);
      });
    });
    */

  }

  // This function check if an update is available and refresh the page
  reloadCache() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        // Message to the user to update
        if (confirm('¡Nueva version disponible! ¿Le gustaría actualizar?')) {
          // Refresh page if there's any update
          window.location.reload();
        }
      });
    }
  }

}
