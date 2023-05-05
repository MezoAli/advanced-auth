"use client";
import { Avatar, Flex, Text, Button, Divider } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function HomePage() {
	const { data: session } =
		useSession();
		// 	{
		// 	required: true,
		// 	onUnauthenticated() {
		// 		redirect("/auth/login?callbackUrl=/");
		// 	},
		// }

	return (
		<Flex
			padding="20px"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			marginTop="50px"
			gap="20px"
		>
			<Avatar src={session?.user.image} name={session?.user.name} size="xl" />
			<Text fontSize="2xl">{session?.user.name}</Text>
			<Text fontSize="lg">{session?.user.email}</Text>
			<Text fontSize="lg">Provider Name : {session?.user.provider}</Text>
			<Button bg="teal.400" onClick={() => signOut()}>
				Sign Out
			</Button>
			<Divider color="black" />
			<Text></Text>
		</Flex>
	);
}
