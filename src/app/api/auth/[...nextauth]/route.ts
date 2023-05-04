import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { Account, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const nextOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({
			token,
			account,
			user,
		}: {
			token: any;
			account?: Account | null | undefined;
			user: any;
		}) {
			if (user) {
				token.provider = account?.provider;
			}

			return token;
		},
		async session({
			session,
			user,
			token,
		}: {
			session: any;
			user: any;
			token: any;
		}) {
			session.user.provider = token.provider;
			return session;
		},
	},
	// pages: {
	// 	signIn: "/login",
	// },
};

const handler = NextAuth(nextOptions);

export { handler as GET, handler as POST };
