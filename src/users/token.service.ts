import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    protected readonly userRepository: Repository<Token>,
  ) {}

  async save(body) {
    return this.userRepository.save(body);
  }

  async findOneBy(options) {
    return this.userRepository.findOneBy(options);
  }

  async delete(options) {
    return this.userRepository.delete(options);
  }
}
