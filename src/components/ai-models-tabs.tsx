"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const tabData = [
	{
		id: "market",
		label: "Market Prediction",
		title:
			"Use AI insights for smarter business decisions and stay competitive.",
		image: "/logos/market-prediction.png",
	},
	{
		id: "finance",
		label: "Finance",
		title: "Our AI models analyze financial data for confident investments.",
		image: "/logos/finance.png",
	},
	{
		id: "analytics",
		label: "Data Analytics",
		title:
			"Transform data into insights with AI analytics that enhance decisions.",
		image: "/logos/data.png",
	},
	{
		id: "content",
		label: "Content Generation",
		title:
			"Create quality content easily with AI that knows your brand and audience.",
		image: "/logos/content.png",
	},
	{
		id: "support",
		label: "Customer Support",
		title: "Use AI chatbots for instant, personalized customer support.",
		image: "/logos/customer.png",
	},
];

export default function AiModelsTabs() {
	const [activeTab, setActiveTab] = useState("market");
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visibleSection = entries.find((entry) => entry.isIntersecting);
				if (visibleSection) {
					setActiveTab(
						visibleSection.target.getAttribute("data-id") || "market"
					);
				}
			},
			{ threshold: 0.5, root: scrollContainerRef.current, rootMargin: "0px" }
		);

		Object.values(sectionRefs.current).forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => {
			Object.values(sectionRefs.current).forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	const handleTabClick = (id: string) => {
		setActiveTab(id);
		const section = sectionRefs.current[id];
		if (section && scrollContainerRef.current) {
			scrollContainerRef.current.scrollTo({
				left: section.offsetLeft,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="py-16 px-4 bg-gray-50">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold">AI Models for Your Business</h2>
				</div>

				{/* Tabs Navigation */}
				<div className="flex justify-center space-x-3 overflow-x-auto pb-2">
					{tabData.map((tab) => (
						<button
							key={tab.id}
							onClick={() => handleTabClick(tab.id)}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
								activeTab === tab.id
									? "bg-[#0a1a35] text-white"
									: "bg-gray-200 text-gray-700 hover:bg-gray-300"
							}`}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Scrollable Container */}
				<div
					ref={scrollContainerRef}
					className="mt-6 flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg hide-scrollbar"
				>
					{tabData.map((tab) => (
						<div
							key={tab.id}
							data-id={tab.id}
							ref={(el) => { sectionRefs.current[tab.id] = el; }}
							className="min-w-full flex-shrink-0 flex items-center p-6 rounded-lg snap-center"
							style={{ backgroundColor: "#f8fafc" }}
						>
							{/* Left Content */}
							<div className="w-1/2">
								<div className="text-sm text-gray-500">{tab.label}</div>
								<h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
									{tab.title}
								</h3>
								<button className="bg-[#0a1a35] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#0a1a35]/90 transition-colors">
									Learn More
								</button>
							</div>

							{/* Right Image */}
							<div className="relative w-1/2 h-64 md:h-72 rounded-lg overflow-hidden">
								<Image
									src={tab.image || "/placeholder.svg"}
									alt={`${tab.label} visualization`}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
