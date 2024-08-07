import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';
import { Blog } from './entities/blog.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Blog]), UsersModule],
  providers: [BlogsResolver, BlogsService],
  exports: [BlogsService],
})
export class BlogsModule {}
