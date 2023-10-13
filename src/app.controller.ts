import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return this.appService.createUser(userDto);
  }
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.appService.readUser(id);
  }
  @Get()
  async getAllUsers() {
    return this.appService.readAllUsers();
  }
  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.appService.updateUser(id, userDto);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
