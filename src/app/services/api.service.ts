import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) {

  }

  getTasks = () => {
    return this.firestore.collection('tasks').valueChanges();
  }

  addTask = task => {
    this.firestore.collection('tasks').add(task).then(() => {
      console.log('success!');
    });
  }

}
