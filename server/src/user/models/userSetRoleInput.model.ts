import { InputType, Field } from "@nestjs/graphql";
import { Role } from "../enums/user.roleEnum";

@InputType()
export class UserSetRoleInput {
	@Field(() => String)
	email: string;

	@Field(() => String)
	password: string;

	@Field(() => Role)
	role: Role;
}
