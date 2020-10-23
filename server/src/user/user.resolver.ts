import {
	Args,
	Mutation,
	Parent,
	ResolveField,
	Resolver
} from "@nestjs/graphql";
import { UserService } from "./user.service";
import { User } from "./models/user.model";
import { UserRegisterInput } from "./models/userRegisterInput.model";
import { PostService } from "src/post/post.service";
import { AuthService } from "../auth/auth.service";
import { UserLoginInput } from "./models/userLoginInput.model";
import { UserSetRoleInput } from "./models/userSetRoleInput.model";

@Resolver(() => User)
export class UserResolver {
	constructor(
		private userService: UserService,
		private postService: PostService,
		private authService: AuthService
	) {}

	@Mutation(() => String)
	async login(@Args("userInput") userInput: UserLoginInput) {
		const { email, password } = userInput;
		const user = await this.authService.validateUser(email, password);
		const { name, id } = user;
		return this.authService.login(name, id);
	}

	@Mutation(() => String)
	async register(@Args("userInput") userInput: UserRegisterInput) {
		const { email, name, password } = userInput;
		await this.authService.validateNewUser(email, name, password);
		const { id: userId } = await this.userService.createUser(
			email,
			name,
			password
		);
		return userId;
	}

	@Mutation(() => User)
	async setUserRole(@Args("userInput") userInput: UserSetRoleInput) {
		const { email, role } = userInput;
		return await this.userService.setUserRole(email, role.toString());
	}

	@ResolveField()
	async posts(@Parent() author: User) {
		const { id } = author;
		return this.postService.getAllPostsByAuthorId(id);
	}
}
