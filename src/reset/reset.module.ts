import { Module } from '@nestjs/common';
import { ResetController } from './reset.controller';
import { ResetService } from './reset.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reset } from './reset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reset])],
  controllers: [ResetController],
  providers: [ResetService]
})
export class ResetModule {}
