import { Field, ObjectType } from "@nestjs/graphql";
import { Comment } from "../../comment/models/comment.model";
import { Post } from "../../post/models/post.model";
import { Role } from "../enums/user.roleEnum";

@ObjectType()
export class User {
	@Field(() => String)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	email: string;

	@Field(() => Role)
	role: Role;

	@Field(() => [Post])
	posts: Post[];

	@Field(() => [Comment])
	comments: Comment[];
}
