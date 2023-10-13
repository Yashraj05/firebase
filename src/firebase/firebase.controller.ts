import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { BookDto } from './dto/book.dto';

@Controller('firebase')
export class FirebaseController {
  constructor(private firebaseService: FirebaseService) {}
  @Post()
  async createBook(@Body() createBook: BookDto) {
    return this.firebaseService.createBook(createBook);
  }
  @Patch(':id')
  async updateBook(@Param('id') id: string, @Body() createBook: BookDto) {
    return this.firebaseService.updateBook(id, createBook);
  }
}
