import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';

@Module({
  providers: [BlogsResolver, BlogsService],
})
export class BlogsModule {}
