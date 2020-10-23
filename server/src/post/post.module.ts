import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostService } from "./post.service";
import { PostResolver } from "./post.resolver";
import { PostEntity } from "./post.entity";
import { CommentModule } from "src/comment/comment.module";
import { UserModule } from "src/user/user.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([PostEntity]),
		forwardRef(() => CommentModule),
		forwardRef(() => UserModule)
	],
	providers: [PostService, PostResolver],
	exports: [PostService, TypeOrmModule.forFeature([PostEntity])]
})
export class PostModule {}
