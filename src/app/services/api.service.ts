import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private db: AngularFirestore) {
    console.log(this.db);
  }

  getTasks = () => {
    return this.db.collection('tasks').valueChanges();
  }
}
