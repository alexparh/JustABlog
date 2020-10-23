module.exports = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "blog_db",
	synchronize: true,
	dropSchema: false,
	logging: false,
	entities: [__dirname + "/../**/**.entity{.ts,.js}"],
	migrations: ["migrations /**/ * .ts "],
	subscribers: ["subscriber /**/ * .ts ", "dist / subscriber /**/ .js "],
	cli: {
		entitiesDir: "src",
		migrationsDir: "migrations",
		subscribersDir: "subscriber"
	}
};
