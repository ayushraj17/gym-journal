import "./globals.css";

export const metadata = {
	title: "Gym Journal",
	description: "Journal your workouts with ease",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main className="flex flex-col items-center min-h-screen bg-background">
					{children}
				</main>
			</body>
		</html>
	);
}
