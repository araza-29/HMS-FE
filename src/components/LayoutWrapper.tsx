"use client"

import { useState, useEffect } from "react"
import IntroAnimation from "./IntroAnimation"
import AnimatedNavbar from "./AnimatedNavbar"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false) // Start false to prevent flash
  const [introComplete, setIntroComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check immediately on mount
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")
    
    if (hasSeenIntro) {
      // Returning user - show red background and navbar immediately
      setShowIntro(false)
      setIntroComplete(true)
      document.documentElement.classList.add("bg-red")
      document.documentElement.classList.remove("bg-black")
    } else {
      // First-time user - show black background and intro
      setShowIntro(true)
      document.documentElement.classList.add("bg-black")
      document.documentElement.classList.remove("bg-red")
    }
    
    setIsLoading(false)
  }, [])

  const handleIntroComplete = () => {
    // Show navbar first, then hide intro for smooth overlap
    setIntroComplete(true)
    // Transition to red background
    document.documentElement.classList.add("bg-red")
    document.documentElement.classList.remove("bg-black")
    // Small delay before hiding intro to ensure navbar is rendered
    setTimeout(() => {
      setShowIntro(false)
    }, 50)
    sessionStorage.setItem("hasSeenIntro", "true")
  }

  // Don't render anything until we've checked session storage
  if (isLoading) {
    return null
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {/* Navbar is always rendered, but visibility controlled by intro state */}
      <AnimatedNavbar showAnimation={introComplete} isVisible={!showIntro || introComplete} />
      {children}
    </>
  )
}
