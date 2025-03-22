export default function Hero() {
	return (
		<section
			className="text-white py-16 px-4 md:py-24"
			style={{
				background:
					"linear-gradient(180deg, #020617 0%, #08142d 50%, #0d2563 100%)",
				backgroundSize: "cover",
			}}
		>
			<div className="container mx-auto text-center max-w-3xl">
				<p className="text-blue-300 mb-2">Leverage our AI solutions</p>
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					AI Models for Business Solutions
				</h1>
				<p className="text-white/80 mb-8 max-w-2xl mx-auto">
					Leverage the power of AI to automate, analyze, and optimize your
					workflows. Our specialized models are designed to fit different
					business needs.
				</p>
				<button className="bg-white text-[#0a1a35] px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-all transform hover:scale-105">
					Get Started Now
				</button>
			</div>
		</section>
	);
}
