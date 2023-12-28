import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! s';
  }

  patchHello(): string {
    return 'This is patch function';
  }

  putHello(): string {
    return 'this is a put method';
  }

  deleteFunc(): string {
    return 'this is a delete function';
  }
}
