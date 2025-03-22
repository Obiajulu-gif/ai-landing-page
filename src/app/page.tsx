import Header from "@/components/header"
import Hero from "@/components/hero"
import LogoMarquee from "@/components/logo-marquee"
import AiModelsTabs from "@/components/ai-models-tabs"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <LogoMarquee />
      <AiModelsTabs />
    </div>
  )
}

