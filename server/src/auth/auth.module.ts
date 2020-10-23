import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
	imports: [
		forwardRef(() => UserModule),
		PassportModule.register({ defaulStrategy: "jwt" }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get("jwtSecret"),
				expiresIn: configService.get("jwtTokenExpiresIn")
			}),
			inject: [ConfigService]
		})
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
