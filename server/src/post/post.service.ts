import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { PostEntity } from "./post.entity";

@Injectable()
export class PostService {
	constructor(
		@InjectRepository(PostEntity) private postRepo: Repository<PostEntity>,
		@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>
	) {}

	getAllPosts() {
		return this.postRepo.find();
	}

	getAllPostsByAuthorId(authorId: string) {
		return this.postRepo.find({
			relations: ["author"],
			where: { author: { id: authorId } }
		});
	}

	getPost(id: string) {
		return this.postRepo.findOne(id);
	}

	async createPost(authorId: string, header: string, text: string) {
		const publishedAt = new Date(Date.now());
		const post = await this.postRepo
			.create({ header, text, publishedAt })
			.save();

		const author = await this.userRepo.findOne(authorId, {
			relations: ["posts"]
		});

		if (!author.posts) {
			author.posts = [];
		}
		author.posts.push(post);
		this.userRepo.save(author);
		console.log(author);
		console.log(post);
		return post;
	}

	async deletePost(id: string) {
		return this.postRepo.delete(id);
	}
}
