import { PostEntity } from "src/post/post.entity";
import { UserEntity } from "src/user/user.entity";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("comments")
export class CommentEntity extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("text")
	text: string;

	@Column()
	addedAt: Date;

	@ManyToOne(
		() => UserEntity,
		author => author.posts,
		{ onDelete: "CASCADE" }
	)
	author: UserEntity;

	@ManyToOne(
		() => PostEntity,
		post => post.comments,
		{ onDelete: "CASCADE" }
	)
	post: PostEntity;
}
