import mongoose from "mongoose";

if (!process.env.DATABASE_URL) {
	throw new Error("please add the database url to .env file");
}

const databaseURL = process.env.DATABASE_URL as string;

let golbalWithMongoose = global as typeof globalThis & {
	mongoose: any;
};

let cached = golbalWithMongoose.mongoose;

if (!cached) {
	cached = golbalWithMongoose.mongoose = { conn: null, promise: null };
}

async function connectDB() {
	if (cached.conn) {
		return cached.conn;
	}
	if (!cached.promise) {
		const options = {
			bufferCommands: false,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		cached.promise = mongoose
			.connect(databaseURL, options)
			.then((mongoose) => {
				console.log("connection has been established");
				return mongoose;
			})
			.catch((error) => {
				console.log("error", error as Error);
			});
	}
	cached.conn = await cached.promise;
	console.log(cached.conn);
	return cached.conn;
}

export default connectDB;
