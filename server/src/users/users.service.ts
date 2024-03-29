import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './../auth/auth.service';
import { PrismaService } from './../prisma/prisma.service';
import { IUserRequest } from './../types/user.d';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getAllUsers() {
    try {
      return await this.prisma.user.findMany({
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
    } catch (err) {
      return err.message;
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id: Number(id) },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      if (!user) {
        throw new HttpException('User doesnt exist', HttpStatus.BAD_REQUEST);
      } else {
        return user;
      }
    } catch (err) {
      throw err;
    }
  }

  async getUserByEmail(email: string) {
    try {
      return await this.prisma.user.findFirst({ where: { email } });
    } catch (err) {
      throw err;
    }
  }

  async createUser(dto: CreateUserDto) {
    try {
      return await this.prisma.user.create({ data: dto });
    } catch (err) {
      throw err;
    }
  }

  async updateUser(dto: UpdateUserDto) {
    const { id, email } = dto;
    const check = await this.prisma.user.findUnique({ where: { id } });
    // if (!check) throw new UnauthorizedException();
    if (!check)
      throw new HttpException(
        'you are not allowed to update',
        HttpStatus.BAD_REQUEST
      );
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
      },
    });
  }

  async deleteUser(dto: DeleteUserDto) {
    return this.prisma.user.delete({
      where: {
        id: dto.id,
      },
    });
  }
}
