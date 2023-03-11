import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthId implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    const authHeader = req.headers.authorization;
    const bearer = authHeader.split(' ')[0] || '';
    const token = authHeader.split(' ')[1] || '';

    if (bearer !== 'Bearer' || !token) {
      req.user = { id: 0, email: 'unknown', name: 'unknown' };
      return true;
    }

    const user = this.jwtService.verify(token);
    req.user = user;

    return true;
  }
}
