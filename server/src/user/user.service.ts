import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>
	) {}

	createUser(email: string, name: string, password: string) {
		return this.userRepo.create({ email, name, password }).save();
	}

	setUserRole(email: string, role: string) {
		return this.userRepo.update({ email }, { role });
	}

	getUserByEmail(email: string) {
		return this.userRepo.findOne({ email });
	}

	getUserById(id: string) {
		return this.userRepo.findOne(id);
	}

	getUserByPostId(postId: string) {
		return this.userRepo.findOne({
			join: { alias: "users", innerJoin: { posts: "users.posts" } },
			where: qb => {
				qb.where("posts.id = :postId", { postId });
			}
		});
	}
}
