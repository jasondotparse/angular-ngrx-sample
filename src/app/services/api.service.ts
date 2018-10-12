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

  addTasks = arr => {
    arr.forEach(todo => {
      this.firestore.collection('tasks').add(todo.toJS()).then(() => {
        console.log(`added ${todo.todo} to firebase.`);
      });
    });
  }

  deleteTasks = arr => {
    // get all the collections. If the props match those in the todo, delete it.
  }

}
