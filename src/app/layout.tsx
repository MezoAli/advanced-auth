import { Providers } from "@/components/providers";
import { Inter } from "next/font/google";
// import { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "...",
// 	description: "...",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
