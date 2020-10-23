import { registerEnumType } from "@nestjs/graphql";

export enum Role {
	Admin,
	Author
}

registerEnumType(Role, {
	name: "Role"
});
