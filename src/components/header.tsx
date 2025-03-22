import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-[#0a1a35] py-4 px-4 md:px-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Image
							src="/logos/logo.png"
							alt="Logo"
							width={32}
							height={32}
							className="mr-2"
						/>
					</div>
					<nav className="hidden md:flex space-x-6 text-sm text-white/80">
						<Link href="#" className="hover:text-white transition-colors">
							Products
						</Link>
						<Link href="#" className="hover:text-white transition-colors">
							Pricing
						</Link>
						<Link href="#" className="hover:text-white transition-colors">
							About Us
						</Link>
						<Link href="#" className="hover:text-white transition-colors">
							Contact Us
						</Link>
						<Link href="#" className="hover:text-white transition-colors">
							Custom Models
						</Link>
					</nav>
					<div className="flex space-x-3">
						<button className="text-white border border-white/30 px-3 py-1 rounded text-sm hover:bg-white/10 transition-colors">
							Login
						</button>
						<button className="bg-white text-[#0a1a35] px-3 py-1 rounded text-sm hover:bg-white/90 transition-colors">
							Get started now
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
