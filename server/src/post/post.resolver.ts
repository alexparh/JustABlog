import { Post } from "./models/post.model";
import { PostInput } from "./models/postInput.model";
import { PostService } from "./post.service";
import { CommentService } from "../comment/comment.service";
import {
	Args,
	Mutation,
	Resolver,
	Query,
	ResolveField,
	Parent
} from "@nestjs/graphql";
import { User } from "src/user/models/user.model";
import { UserService } from "src/user/user.service";
import { Comment } from "src/comment/models/comment.model";

@Resolver(() => Post)
export class PostResolver {
	constructor(
		private postService: PostService,
		private commentService: CommentService,
		private userService: UserService
	) {}

	@Query(() => Post)
	async getPost(@Args("id") id: string) {
		return await this.postService.getPost(id);
	}

	@Query(() => [Post])
	async getAllPosts() {
		return await this.postService.getAllPosts();
	}

	@Mutation(() => Post)
	async createPost(@Args("postInput") postInput: PostInput) {
		const { authorId, header, text } = postInput;
		return await this.postService.createPost(authorId, header, text);
	}

	@Mutation(() => Post)
	async deletePost(@Args("id") id: string) {
		await this.postService.deletePost(id);
		//Also delete comments
		// const comments = await this.commentService.getAllCommentsWithPostId(id);
		// comments.forEach(comment => {
		// 	this.commentService.deleteComment(comment.id);
		// });
		return { id };
	}

	@ResolveField(() => [Comment])
	async comments(@Parent() post: Post) {
		const { id } = post;
		return this.commentService.getAllCommentsWithPostId(id);
	}

	@ResolveField(() => User)
	async author(post: Post) {
		const { id } = post;
		return await this.userService.getUserByPostId(id);
	}
}
