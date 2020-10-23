import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PostInput {
	@Field(() => String)
	header: string;

	@Field(() => String)
	text: string;

	@Field(() => String)
	authorId: string;
}
