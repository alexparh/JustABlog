import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CommentEntity } from "./comment.entity";
import { PostEntity } from "../post/post.entity";

@Injectable()
export class CommentService {
	constructor(
		@InjectRepository(CommentEntity)
		private commentRepo: Repository<CommentEntity>,
		@InjectRepository(PostEntity) private postRepo: Repository<PostEntity>,
		@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>
	) {}

	getAllCommentsWithPostId(postId: string) {
		return this.commentRepo.find({
			relations: ["post"],
			where: { post: { id: postId } }
		});
	}

	async createComment(authorId: string, postId: string, text: string) {
		const addedAt = new Date(Date.now());
		const comment = await this.commentRepo.create({ text, addedAt }).save();

		const post = await this.postRepo.findOne(postId);
		post.comments.push(comment);
		await this.postRepo.save(post);

		const author = await this.userRepo.findOne(authorId);
		author.comments.push(comment);
		return this.userRepo.save(author);
	}

	async deleteComment(id: string) {
		await this.commentRepo.delete(id);
	}
}
