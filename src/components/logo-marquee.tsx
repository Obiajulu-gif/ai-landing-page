"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
	{
		name: "Sisyphus",
		color: "bg-green-500",
		logo: "/logos/sisyphus.png",
	},
	{
		name: "Circooles",
		color: "bg-blue-500",
		logo: "/logos/circooles.png",
	},
	{
		name: "Catalog",
		color: "bg-purple-500",
		logo: "/logos/catalogue.png",
	},
	{
		name: "Quotient",
		color: "bg-violet-500",
		logo: "/logos/quoient.png",
	},
	{
		name: "Sisyphus",
		color: "bg-green-500",
		logo: "/logos/sisyphus.png",
	},
	{
		name: "Circooles",
		color: "bg-blue-500",
		logo: "/logos/circooles.png",
	},
	{
		name: "Catalog",
		color: "bg-purple-500",
		logo: "/logos/catalogue.png",
	},
	{
		name: "Quotient",
		color: "bg-violet-500",
		logo: "/logos/quoient.png",
	},
];

export default function LogoMarquee() {
	return (
		<section className="py-8 overflow-hidden">
			<div className="container mx-auto">
				<p className="text-center text-sm text-gray-500 mb-6">
					Join 1,000+ companies already growing
				</p>

				<div className="relative">
					<div className="flex overflow-hidden">
						<motion.div
							className="flex gap-8 md:gap-16 items-center"
							animate={{ x: ["0%", "-50%"] }}
							transition={{
								duration: 20,
								ease: "linear",
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							{logos.map((logo, index) => (
								<div key={index} className="flex items-center flex-shrink-0">
									<div
										className={`w-6 h-6 rounded-full mr-2 flex items-center justify-center`}
									>
										<Image
											src={logo.logo || "/placeholder.svg"}
											alt={logo.name}
											width={16}
											height={16}
											className="object-contain"
											onError={(e) => {
												// Fallback if image fails to load
												const target = e.target as HTMLElement;
												target.style.display = "none";
											}}
										/>
									</div>
									<span className="font-medium whitespace-nowrap">
										{logo.name}
									</span>
								</div>
							))}
						</motion.div>

						<motion.div
							className="flex gap-8 md:gap-16 items-center absolute left-full"
							animate={{ x: ["0%", "-50%"] }}
							transition={{
								duration: 20,
								ease: "linear",
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							{logos.map((logo, index) => (
								<div key={index} className="flex items-center flex-shrink-0">
									<div
										className={`w-6 h-6  rounded-full mr-2 flex items-center justify-center`}
									>
										<Image
											src={logo.logo || "/placeholder.svg"}
											alt={logo.name}
											width={16}
											height={16}
											className="object-contain"
											onError={(e) => {
												// Fallback if image fails to load
												const target = e.target as HTMLElement;
												target.style.display = "none";
											}}
										/>
									</div>
									<span className="font-medium whitespace-nowrap">
										{logo.name}
									</span>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
