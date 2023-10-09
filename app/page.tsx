import LogoutButton from "@/components/LogoutButton";
import Page from "@/components/screens/page";
import { Menubar, MenubarTrigger } from "@/components/ui/menubar";
import { MenubarMenu } from "@radix-ui/react-menubar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Index() {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="flex flex-col items-center w-full">
			<nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
				<div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm text-foreground">
					{user ? (
						<div className="flex items-center justify-between w-full gap-4">
							Hey, {user.email}!
							<LogoutButton />
						</div>
					) : (
						<Link
							href="/login"
							className="flex px-3 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
						>
							Login
						</Link>
					)}
				</div>
			</nav>
			<Page />
		</div>
	);
}
