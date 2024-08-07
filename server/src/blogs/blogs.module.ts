import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogsService, BlogsResolver],
})
export class BlogsModule {}
