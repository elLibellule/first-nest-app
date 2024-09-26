import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World, this is just awesome !! I'm so glad, ";
  }
}
