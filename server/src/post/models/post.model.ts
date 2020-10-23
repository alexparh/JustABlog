import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/models/user.model";
import { Comment } from "../../comment/models/comment.model";

@ObjectType()
export class Post {
	@Field(() => String)
	id: string;

	@Field(() => String)
	header: string;

	@Field(() => User)
	author: User;

	@Field(() => String)
	text: string;

	@Field(() => Date)
	publishedAt: Date;

	@Field(() => [Comment])
	comments: Comment[];
}
