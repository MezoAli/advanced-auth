"use client";
import { Text } from "@chakra-ui/react";
import { Avatar, Button, Flex } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
	const { data: session } = useSession();
	console.log(session);

	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap={8}
		>
			<Text fontSize="xl">{session?.user?.name}</Text>
			<Avatar
				name={session?.user?.name!}
				src={session?.user?.image!}
				size="2xl"
				display="block"
			/>
			{session ? (
				<Button onClick={() => signOut()}>Sign Out</Button>
			) : (
				<Button onClick={() => signIn()}>Sign In</Button>
			)}
		</Flex>
	);
}
