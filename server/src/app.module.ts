import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { join } from "path";
import { config } from "./config/config";
import { PostModule } from "./post/post.module";
import { CommentModule } from "./comment/comment.module";
import "reflect-metadata";
import { DatabaseConfig } from "./config/db.config";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [config]
		}),
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), "src/schema.gql"),
			sortSchema: true,
			context: ({ req }) => ({ headers: req.headers })
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useClass: DatabaseConfig
		}),
		UserModule,
		AuthModule,
		PostModule,
		CommentModule
	]
})
export class AppModule {
	constructor(private connection: Connection) {}
}
