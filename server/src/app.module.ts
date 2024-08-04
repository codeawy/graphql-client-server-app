import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BlogsModule } from './blogs/blogs.module';
import { Blog } from './blogs/entities/blog.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Naga@123',
      database: 'graphql',
      entities: [join(__dirname, '**/*.entities{.ts,.js}')],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Blog]),
    UsersModule,
    BlogsModule,
  ],
  providers: [],
})
export class AppModule {}
