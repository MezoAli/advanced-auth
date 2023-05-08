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
import { BsPerson } from "react-icons/bs";
import { PhoneIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

export default function Signup() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();
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
						you already have an account{" "}
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
					<Stack as="form" spacing={4}>
						<FormControl>
							<FormLabel htmlFor="first_name">First Name</FormLabel>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={<BsPerson color="gray.300" fill="gray.300" />}
								/>
								<Input
									type="text"
									placeholder="First Name"
									id="first_name"
									{...register("first_name")}
								/>
								<FormErrorMessage>
									{/* {errors && errors.name.message} */}
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
