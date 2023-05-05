"use client";
import { Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function HomePage() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/auth/login?callbackUrl=/");
		},
	});

	return (
		<Text
			color="blue.400"
			textAlign="center"
			backgroundColor="teal.100"
			padding="20px"
		>
			Wellcome to home page {session?.user.name}
		</Text>
	);
}
