import * as admin from 'firebase-admin';

import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
admin.initializeApp({
  credential: admin.credential.cert(
    '/home/my/Desktop/firebase-crud/src/firebase/firebase-config/testing-fc6d0-firebase-adminsdk-7djm1-16b84c1e31.json',
  ),
  databaseURL: 'https://testing-fc6d0-default-rtdb.firebaseio.com', // Replace with your Firebase Realtime Database URL
});
const db = admin.database();
const booksref = db.ref('/books');

@Injectable()
export class FirebaseService {
  constructor() {}
  async createBook(createBook: BookDto) {
    booksref.push(createBook);
  }
  async updateBook(id: string, updateBook: BookDto) {
    const bookRef = booksref.child(id);
    await bookRef.update(updateBook);
    return 'success';
  }
  async readBook(id: string)
  {
    const bookRef = booksref.child(id);
    const book = await bookRef.get();
    return book;
  
  }
}
