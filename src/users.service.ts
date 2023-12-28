import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'this users';
  }

  postUsers() {
    return 'this is post users';
  }
}
