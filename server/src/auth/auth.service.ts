import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { PrismaService } from './../prisma/prisma.service';
import { IUser } from './../types/user.d';
import { UsersService } from './../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async login(userDto: LoginUserDto) {
    if (!userDto.email || !userDto.password) {
      throw new HttpException(
        'there is no email or password',
        HttpStatus.BAD_REQUEST
      );
    }

    console.log(userDto);

    const user = await this.validateUser(userDto);
    const userInfo = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        images: true,
      },
    });
    return { ...userInfo, ...(await this.generateToken(user)) };
  }

  async registration(userDto: CreateUserDto) {
    const { name, email, password } = userDto;

    if (!name || !email || !password) {
      throw new HttpException(
        'You need to fill all fields.',
        HttpStatus.BAD_REQUEST
      );
    }

    const check = await this.usersService.getUserByEmail(userDto.email);
    if (check) {
      throw new HttpException(
        'user is already registered',
        HttpStatus.BAD_REQUEST
      );
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.prisma.user.create({
      data: { ...userDto, password: hashPassword },
    });

    return this.generateToken(user);
  }

  private async generateToken(user: IUser) {
    const { id, email, name } = user;
    const payload = { id, email, name };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: LoginUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);
    if (!user)
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    const checkPassword = await bcrypt.compare(userDto.password, user.password);

    if (user && checkPassword) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }
}
