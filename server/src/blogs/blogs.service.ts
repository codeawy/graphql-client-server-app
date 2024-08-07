import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  create(createBlogInput: CreateBlogInput): Promise<Blog> {
    const newBlog = this.blogsRepository.create(createBlogInput);
    return this.blogsRepository.save(newBlog);
  }

  findAll(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  findOne(id: number): Promise<Blog> {
    return this.blogsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBlogInput: UpdateBlogInput): Promise<Blog> {
    await this.blogsRepository.update(id, updateBlogInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.blogsRepository.delete(id);
  }
}
