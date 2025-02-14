import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ItemMenuWContent from "@/components/ui/item-menu-w-content";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="w-full py-5 px-10 flex justify-between items-center">
					<h1 className="font-bold">MDFe Web</h1>
					<nav>
						<ul className="flex gap-5">
							<ItemMenu href="/" title="Home" />
							<ItemMenuWContent title="MDFe">
								<ItemMenu href="/" title="Novo documento" />
								<ItemMenu href="/" title="Buscar documento" />
							</ItemMenuWContent>
							<ItemMenu href="/login" title="Login" />
						</ul>
					</nav>
				</header>
				{children}
				<footer className="bg-black flex flex-col">
					<span className="text-white/35 self-center">&copy; João Alisson</span>
				</footer>
			</body>
		</html>
	);
}

const ItemMenu = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li
			className={`py-1 px-3 rounded-sm bg-white hover:bg-stone-100 ${className}`}
		>
			<a ref={ref} {...props}>
				{title}
			</a>
		</li>
	);
});
