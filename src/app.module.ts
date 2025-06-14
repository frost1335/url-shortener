import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || "mongodb://localhost:27017/api"),
    UrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
