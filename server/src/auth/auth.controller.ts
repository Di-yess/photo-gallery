import { IUserRequest } from './../types/user.d';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginUserDto } from './../users/dto/login-user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/self')
  async selfUser(@Req() req: IUserRequest) {
    return this.authService.selfUser(req);
  }

  @Post('/login')
  login(@Body() userDto: LoginUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
