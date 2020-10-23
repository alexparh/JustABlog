import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { UserResolver } from "./user.resolver";
import { CommentModule } from "src/comment/comment.module";
import { PostModule } from "src/post/post.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([UserEntity]),
		forwardRef(() => PostModule),
		forwardRef(() => CommentModule),
		forwardRef(() => AuthModule)
	],
	providers: [UserService, UserResolver],
	exports: [UserService, TypeOrmModule.forFeature([UserEntity])]
})
export class UserModule {}
