import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';

@Injectable()
export class BlogsService {
  create(createBlogInput: CreateBlogInput) {
    return 'This action adds a new blog';
  }

  findAll() {
    return `This action returns all blogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogInput: UpdateBlogInput) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
