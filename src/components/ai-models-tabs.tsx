"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

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
  const [activeTab, setActiveTab] = useState("market")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const tabsContainerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Initialize section refs
  useEffect(() => {
    tabData.forEach((tab) => {
      sectionRefs.current[tab.id] = null
    })
  }, [])

  // Observe which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) {
          setActiveTab(visibleSection.target.getAttribute("data-id") || "market")
        }
      },
      { threshold: 0.5, root: scrollContainerRef.current, rootMargin: "0px" },
    )

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  // Scroll to active tab when tab changes
  useEffect(() => {
    // Scroll content to the active tab
    const section = sectionRefs.current[activeTab]
    if (section && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: section.offsetLeft,
        behavior: "smooth",
      })
    }

    // Scroll tab navigation to ensure active tab is visible
    const tabsContainer = tabsContainerRef.current
    if (tabsContainer) {
      const activeTabElement = tabsContainer.querySelector(`[data-tab="${activeTab}"]`)
      if (activeTabElement) {
        const containerWidth = tabsContainer.offsetWidth
        const tabWidth = activeTabElement.clientWidth
        const tabLeft = (activeTabElement as HTMLElement).offsetLeft
        const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2

        tabsContainer.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }
  }, [activeTab])

  const handleTabClick = (id: string) => {
    setActiveTab(id)
  }

  const scrollToNext = () => {
    const currentIndex = tabData.findIndex((tab) => tab.id === activeTab)
    if (currentIndex < tabData.length - 1) {
      setActiveTab(tabData[currentIndex + 1].id)
    }
  }

  const scrollToPrev = () => {
    const currentIndex = tabData.findIndex((tab) => tab.id === activeTab)
    if (currentIndex > 0) {
      setActiveTab(tabData[currentIndex - 1].id)
    }
  }

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">AI Models tailored for your business needs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are
            designed to fit different business needs.
          </p>
        </div>

        {/* Tabs Navigation - Desktop */}
        <div className="hidden md:flex justify-center space-x-3 overflow-x-auto pb-2 hide-scrollbar">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-[#0a1a35] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Navigation - Mobile */}
        <div ref={tabsContainerRef} className="md:hidden flex overflow-x-auto space-x-2 pb-3 hide-scrollbar">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                activeTab === tab.id ? "bg-[#0a1a35] text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="md:hidden flex justify-between items-center mt-2 mb-4">
          <button
            onClick={scrollToPrev}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            disabled={activeTab === tabData[0].id}
          >
            <ChevronLeft size={20} className={activeTab === tabData[0].id ? "opacity-50" : ""} />
          </button>
          <div className="text-sm font-medium text-gray-500">
            {tabData.findIndex((tab) => tab.id === activeTab) + 1} of {tabData.length}
          </div>
          <button
            onClick={scrollToNext}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            disabled={activeTab === tabData[tabData.length - 1].id}
          >
            <ChevronRight size={20} className={activeTab === tabData[tabData.length - 1].id ? "opacity-50" : ""} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="mt-2 flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg hide-scrollbar"
        >
          {tabData.map((tab) => (
            <div
              key={tab.id}
              data-id={tab.id}
              ref={(el) => {
                sectionRefs.current[tab.id] = el
              }}
              className="min-w-full flex-shrink-0 snap-center"
            >
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                {/* Mobile View */}
                <div className="md:hidden">
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={tab.image || "/placeholder.svg"}
                      alt={`${tab.label} visualization`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-blue-600 font-medium mb-1">{tab.label}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tab.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{tab.description}</p>
                    <button className="w-full bg-[#0a1a35] text-white px-4 py-2 rounded-md hover:bg-[#0a1a35]/90 transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex flex-row items-center">
                  <div className="w-1/2 p-8">
                    <div className="text-sm text-blue-600 font-medium mb-2">{tab.label}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{tab.title}</h3>
                    <p className="text-gray-600 mb-6">{tab.description}</p>
                    <button className="bg-[#0a1a35] text-white px-5 py-2.5 rounded-md hover:bg-[#0a1a35]/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="relative w-1/2 h-[400px]">
                    <Image
                      src={tab.image || "/placeholder.svg"}
                      alt={`${tab.label} visualization`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots - Mobile Only */}
        <div className="md:hidden flex justify-center space-x-1.5 mt-4">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeTab === tab.id ? "bg-[#0a1a35] w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to ${tab.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

