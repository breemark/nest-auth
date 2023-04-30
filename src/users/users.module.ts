import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { Token } from './entities/token.entity';
import { TokenService } from './token.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Token]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1w' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, TokenService],
})
export class UsersModule {}
