import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

const COLLECTION_USERS = 'users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public firestore: Firestore) { }
  async createUser(name: string, age: number) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_USERS), {
      name: name,
      age: age,
    });
    console.log('Document written with ID: ', docRef.id);

  }

  getUsers() {
    const userRef = collection(this.firestore, COLLECTION_USERS);
    return collectionData(userRef, { idField: 'id' }) as Observable<any[]>;
  }

  // getUsersList(): Observable<any[]> {
  // const usersCollection = collection(this.firestore, COLLECTION_USERS);
  // const queryObservable = from(getDocs(usersCollection));

  // return queryObservable.pipe(
  //   map((querySnapshot) => {
  //     const users: any[] = [];
  //     querySnapshot.forEach((doc) => {
  //       users.push({ id: doc.id, ...doc.data() });
  //     });
  //     return users;
  //   })
  // );

  // const users: any[] = [];
  // const usersCollection = collection(this.firestore, COLLECTION_USERS);
  // const snap = await getDocs(usersCollection) // Convertir la promesa de consulta en un observable

  // snap.forEach(doc => {
  //   users.push(doc.data);
  // })

  // }


}
