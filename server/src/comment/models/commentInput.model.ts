import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CommentInput {
	@Field(() => String)
	postId: string;

	@Field(() => String)
	authorId: string;

	@Field(() => String)
	text: string;
}
