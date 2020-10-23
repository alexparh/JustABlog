import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(email: string, pass: string) {
		const user = await this.userService.getUserByEmail(email);

		if (!user) {
			throw new HttpException(
				"Email or password is incorrect",
				HttpStatus.UNAUTHORIZED
			);
		}

		const areEqual = await bcrypt.compare(pass, user.password);

		if (!areEqual) {
			throw new HttpException(
				"Email or password is incorrect",
				HttpStatus.UNAUTHORIZED
			);
		}

		return user;
	}

	async validateNewUser(email: string, name: string, password: string) {
		if (!email || !name || !password) {
			throw new HttpException("Invalid values", HttpStatus.BAD_REQUEST);
		}
		const user = await this.userService.getUserByEmail(email);
		if (user) {
			throw new HttpException(
				"User with this email already exists",
				HttpStatus.BAD_REQUEST
			);
		}

		//TODO: Add validation to email + password
	}

	async validatePayload(username: string, userId: string) {
		const user = await this.userService.getUserById(userId);
		if (!user) {
			throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED);
		}
		return user;
	}

	async login(userName: string, userId: string) {
		const payload = { userName, userId };
		// return {
		// 	expiresIn: process.env.JWT_TOKEN_EXPIRESIN,
		// 	accessToken: this.jwtService.sign(payload)
		// };
		return this.jwtService.sign(payload);
	}
}
