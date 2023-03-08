import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}
}
