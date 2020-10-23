export const config = () => ({
	port: +process.env.PORT,
	jwtSecret: process.env.JWT_SECRET,
	jwtTokenExpiresIn: process.env.JWT_TOKEN_EXPIRESIN,
	database: {
		type: "postgres",
		host: process.env.DB_HOST,
		port: +process.env.DB_PORT,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		entities: [__dirname + "/../**/**.entity{.ts,.js}"],
		synchronize: true,
		dropSchema: false,
		logging: false,
		migrations: ["migrations/**/*.ts"],
		subscribers: ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
		cli: {
			entitiesDir: "src",
			migrationsDir: "migrations",
			subscribersDir: "subscriber"
		}
	}
});
