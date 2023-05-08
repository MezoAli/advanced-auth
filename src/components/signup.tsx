"use client";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
	InputGroup,
	InputLeftElement,
	FormErrorMessage,
} from "@chakra-ui/react";
import { z } from "zod";
import { CiUser } from "react-icons/ci";
import { PhoneIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormScehma = z.object({
	first_name: z
		.string()
		.min(6, "first name must be atleast 6 characters")
		.max(25, "first name must be less that 25 characters")
		.regex(new RegExp("^[a-zA-Z]+$"), "no special characters allowed"),
	last_name: z
		.string()
		.min(6, "first name must be atleast 6 characters")
		.max(25, "first name must be less that 25 characters")
		.regex(new RegExp("^[a-zA-Z]+$"), "no special characters allowed"),
});

type FormScehmaType = z.infer<typeof FormScehma>;

export default function Signup() {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<FormScehmaType>({
		resolver: zodResolver(FormScehma),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};
	console.log(errors?.first_name?.message);

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Sign Up</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						you already have an account !?{" "}
						<Link href="/auth/login" color={"blue.400"}>
							sign in
						</Link>{" "}
						✌️
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
						<FormControl>
							<FormLabel htmlFor="first_name">First Name</FormLabel>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={<CiUser color="gray.300" fill="gray.300" />}
								/>
								<Input
									type="text"
									disabled={isSubmitting}
									placeholder="First Name"
									id="first_name"
									{...register("first_name")}
								/>
							</InputGroup>
							<FormErrorMessage>
								{errors && <p>errors?.first_name?.message</p>}
							</FormErrorMessage>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="last_name">Last Name</FormLabel>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={<CiUser color="gray.300" fill="gray.300" />}
								/>
								<Input
									type="text"
									disabled={isSubmitting}
									placeholder="Last Name"
									id="last_name"
									{...register("last_name")}
								/>
								<FormErrorMessage>
									{errors?.last_name?.message}
								</FormErrorMessage>
							</InputGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Phone Number</FormLabel>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={<PhoneIcon color="gray.300" />}
								/>
								<Input type="tel" placeholder="Phone number" />
							</InputGroup>
						</FormControl>

						<Button
							type="submit"
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}
						>
							Sign Up
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
