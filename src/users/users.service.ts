import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];
  private counter = 1;

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: CreateUserDto) {
    const newUser = { ...user, id: this.counter++ };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: CreateUserDto) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    this.users[index] = { ...user, id };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    const deleted = this.users[index];
    this.users.splice(index, 1);
    return deleted;
  }
}
