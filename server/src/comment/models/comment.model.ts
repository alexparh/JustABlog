import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "src/post/models/post.model";
import { User } from "src/user/models/user.model";

@ObjectType()
export class Comment {
	@Field(() => String)
	id: string;

	@Field(() => Post)
	post: Post;

	@Field(() => User)
	author: User;

	@Field(() => String)
	text: string;

	@Field(() => Date)
	addedAt: Date;
}
