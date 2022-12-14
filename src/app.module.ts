import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsModule } from './albums/albums.module';
import { AuthModule } from './auth/auth.module';
import { StickersModule } from './stickers/stickers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true, // Be careful for use this in prod, you can lose data
    }),
    StickersModule,
    UsersModule,
    AlbumsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
