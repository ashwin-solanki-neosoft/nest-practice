import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Patch()
  patchHello(): string {
    return this.appService.patchHello();
  }
  @Put()
  putHello(): string {
    return this.appService.putHello();
  }
  @Delete()
  deleteFunc(): string {
    return this.appService.deleteFunc();
  }
}
