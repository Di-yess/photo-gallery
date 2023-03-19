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
import { IUser, IUserRequest } from './../types/user.d';
import { UsersService } from './../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  // self User
  async selfUser(req: IUserRequest) {
    const { id } = req.user;
    try {
      const userInfo = await this.prisma.user.findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          avatar: { select: { link: true } },
          images: {
            select: {
              id: true,
              name: true,
              description: true,
              link: true,
              coordX: true,
              coordY: true,
              userId: true,
              createdAt: true,
              _count: {
                select: {
                  likes: true,
                },
              },
            },
          },
        },
      });

      if (!userInfo) {
        return new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      const { id: userId, email, name } = userInfo;
      const newToken = await this.generateToken({
        id: userId,
        email,
        name,
      });

      return { ...userInfo, ...newToken };
    } catch (err) {
      throw err;
    }
  }

  async login(userDto: LoginUserDto) {
    if (!userDto.email || !userDto.password) {
      throw new HttpException(
        'there is no email or password',
        HttpStatus.BAD_REQUEST
      );
    }

    const user = await this.validateUser(userDto);
    const userInfo = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: { select: { link: true } },
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
      data: { ...userDto, password: hashPassword, avatar: { create: {} } },
      select: {
        id: true,
        name: true,
        password: true,
        email: true,
        avatar: true,
        images: true,
      },
    });

    const { password: userPassword, ...userWithoutPassword } = user;
    return { ...userWithoutPassword, ...(await this.generateToken(user)) };
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
