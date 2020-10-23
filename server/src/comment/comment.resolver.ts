import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { Comment } from "./models/comment.model";
import { CommentInput } from "./models/commentInput.model";

@Resolver(() => Comment)
export class CommentResolver {
	constructor(private commentService: CommentService) {}

	@Mutation(() => Comment)
	async createComment(@Args("commentInput") commmetInput: CommentInput) {
		const { authorId, postId, text } = commmetInput;
		return await this.commentService.createComment(authorId, postId, text);
	}

	@Mutation(() => Comment)
	deleteComment(@Args("id") id: string) {
		this.commentService.deleteComment(id);
	}
}
