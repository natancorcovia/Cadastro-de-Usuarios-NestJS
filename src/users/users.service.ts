import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users[id];
  }

  create(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  update(id: number, user: CreateUserDto) {
    this.users[id] = user;
    return user;
  }

  remove(id: number) {
    const deleted = this.users[id];
    this.users.splice(id, 1);
    return deleted;
  }
}
