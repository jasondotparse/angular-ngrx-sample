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

  // db.collection("cities").doc("new-city-id").set(data);
  addTasks = arr => {
    arr.forEach(todo => {
      const saved = todo.set('saved', true);
      this.firestore.collection('tasks').doc(String(todo.get('id'))).set(saved.toJS()).then(() => {
        console.log(`added todo id ${todo.get('id')} to firebase.`);
      });
    });
  }

  deleteTasks = arr => {
    arr.forEach(todo => {
      this.firestore.collection('tasks').doc(String(todo.get('id'))).delete().then(res => {
        console.log(`deleted todo ID ${todo.get('id')}`);
      });
    });
  }

}
