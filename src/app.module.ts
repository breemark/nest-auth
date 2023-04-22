import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      entities: ['dist/**/*.entity{.ts,.js}'], // This generates the DB tables
      synchronize: true,    // This synchronizes the DB
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
