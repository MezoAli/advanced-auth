import HomePage from "@/components/home";
import { nextOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
	// const session = await getServerSession(nextOptions);
	// if (!session) {
	// 	redirect("/auth/login?callbackUrl=/");
	// }

	return <HomePage />;
}
