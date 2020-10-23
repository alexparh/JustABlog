import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostModule } from "src/post/post.module";
import { UserModule } from "src/user/user.module";
import { CommentEntity } from "./comment.entity";
import { CommentResolver } from "./comment.resolver";
import { CommentService } from "./comment.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([CommentEntity]),
		forwardRef(() => UserModule),
		forwardRef(() => PostModule)
	],
	providers: [CommentResolver, CommentService],
	exports: [CommentService, TypeOrmModule.forFeature([CommentEntity])]
})
export class CommentModule {}
