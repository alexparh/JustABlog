import { CommentEntity } from "src/comment/comment.entity";
import * as bcrypt from "bcrypt";
import { PostEntity } from "src/post/post.entity";
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	BeforeInsert
} from "typeorm";

@Entity("users")
export class UserEntity extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column()
	name: string;

	@Column({ default: "Author" })
	role: string;

	@OneToMany(
		() => PostEntity,
		post => post.author
	)
	posts: PostEntity[];

	@OneToMany(
		() => CommentEntity,
		comment => comment.author
	)
	comments: CommentEntity[];

	@BeforeInsert() async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}
}
