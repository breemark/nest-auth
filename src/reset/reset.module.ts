import { Module } from '@nestjs/common';
import { ResetController } from './reset.controller';
import { ResetService } from './reset.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reset } from './reset.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reset]),
    MailerModule.forRoot({
      transport: {
        host: '0.0.0.0',
        port: 1025,
      },
      defaults: {
        from: 'from@example.com',
      },
    }),
    UsersModule
  ],
  controllers: [ResetController],
  providers: [ResetService],
})
export class ResetModule {}
