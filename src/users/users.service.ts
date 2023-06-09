import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    protected readonly userRepository: Repository<User>,
  ) {}

  async save(body) {
    return this.userRepository.save(body);
  }

  async findOne(options) {
    return this.userRepository.findOne(options);
  }

  async update(id: number, options) {
    return this.userRepository.update(id, options);
  }

  /*
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  */

  findAll() {
    return `This action returns all users`;
  }

  /*
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  */

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
