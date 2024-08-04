import { Blog } from 'src/blogs/entities/blog.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  // @OneToMany(() => Blog, (blog) => blog.author)
  // blogs: Blog[];
}
