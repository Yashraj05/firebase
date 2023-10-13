import { Injectable } from '@nestjs/common';
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from './config/firebase.config';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  private userCollection = collection(db, 'users');

  async createUser(userData: UserDto) {
    try {
      const docRef = await addDoc(this.userCollection, userData);
      console.log('Document written with ID: ', docRef.id);
      return docRef;
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  async updateUser(id: string, userDto: UserDto) {
    const userDocRef = doc(this.userCollection, id);
    const user = await setDoc(userDocRef, userDto);
    return user;
  }
  async deleteUser(id: string) {
    console.log('deleted');
    const userDocRef = doc(this.userCollection, id);
    await deleteDoc(userDocRef);
    return 'deleted successfully';
  }
  async readAllUsers() {
    const users = await getDocs(this.userCollection);
    const arr: any[] = [];
    users.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      arr.push(doc.data());
    });
    return arr;
  }
  async readUser(id: string) {
    const userDocRef = doc(this.userCollection, id);
    const user = await getDoc(userDocRef);
    return user.data();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
