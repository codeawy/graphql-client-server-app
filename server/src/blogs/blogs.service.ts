import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createBlogInput: CreateBlogInput): Promise<Blog> {
    // Find the author using the authorId
    const author = await this.userRepository.findOne({
      where: { id: createBlogInput.authorId },
    });
    if (!author) {
      throw new NotFoundException(
        `User with ID ${createBlogInput.authorId} not found`,
      );
    }

    // Create a new blog instance and set the author relation
    const newBlog = this.blogRepository.create({
      ...createBlogInput,
      author,
    });

    // Save the blog to the database
    return this.blogRepository.save(newBlog);
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Blog> {
    const blog = await this.blogRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    return blog;
  }

  async update(id: number, updateBlogInput: UpdateBlogInput): Promise<Blog> {
    const blog = await this.blogRepository.preload({
      id,
      ...updateBlogInput,
    });
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    return this.blogRepository.save(blog);
  }

  async remove(id: number): Promise<void> {
    const result = await this.blogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
  }
}
