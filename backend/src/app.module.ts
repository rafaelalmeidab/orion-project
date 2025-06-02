import { Module, CacheModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST || "mysql",
      port: 3306,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "root",
      database: process.env.DB_NAME || "projeto",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true, // Somente para dev
    }),
    UsersModule,
  ],
})
export class AppModule {}
