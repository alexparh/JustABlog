import { CommentEntity } from "src/comment/comment.entity";
import { UserEntity } from "src/user/user.entity";
import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("posts")
export class PostEntity extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	header: string;

	@Column("text")
	text: string;

	@Column()
	publishedAt: Date;

	@ManyToOne(
		() => UserEntity,
		user => user.posts,
		{ onDelete: "CASCADE" }
	)
	author: UserEntity;

	@OneToMany(
		() => CommentEntity,
		comment => comment.post
	)
	comments: CommentEntity[];
}
