import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: any) {
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Passwords do not match');
    }

    return this.usersService.save({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: await bcrypt.hash(body.password, 12),
    });
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.usersService.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid Credentials');
    }
    return user;
  }

  /*
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  */
}
