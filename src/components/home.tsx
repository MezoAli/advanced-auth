"use client";
import { Avatar, Flex, Text } from "@chakra-ui/react";
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
		<Flex
			color="white"
			padding="20px"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			marginTop="100px"
		>
			<Avatar src={session?.user.image} />
			<Text fontSize="2xl">{session?.user.name}</Text>
			<Text fontSize="lg">{session?.user.email}</Text>
			<Text fontSize="lg">Provider Name : {session?.user.provider}</Text>
		</Flex>
	);
}
