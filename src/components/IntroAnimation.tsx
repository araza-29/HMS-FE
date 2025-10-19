"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Step 0: Show logo in center (1 second)
    const timer1 = setTimeout(() => setStep(1), 1000)
    
    // Step 1: Text slides in from right (1.5 seconds)
    const timer2 = setTimeout(() => setStep(2), 2500)
    
    // Step 2: Logo + text move to navbar, background changes to red (1 second)
    const timer3 = setTimeout(() => {
      setStep(3)
      // Trigger background color transition from black to red
      document.documentElement.classList.add("bg-transition")
    }, 3500)
    
    // Step 3: Logo reaches navbar position, wait a moment
    const timer4 = setTimeout(() => setStep(4), 4500)
    
    // Step 4: Complete animation - navbar will appear before intro fully fades
    const timer5 = setTimeout(() => onComplete(), 4600)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {step < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'transparent' }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 0.5, ease: "easeOut" }
          }}
        >
          {/* Logo and Text Container */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ y: 0 }}
            animate={{
              y: step >= 2 ? "-46vh" : 0,
              scale: step >= 2 ? 0.4 : 1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/logo.png"
                alt="RehabEase Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>

            {/* Text */}
            <motion.span
              className="font-bold text-white"
              style={{ 
                fontFamily: 'var(--theme-font-heading)',
                fontSize: '3.7rem' // 2xl when scaled, 5xl initially
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                x: step >= 1 ? 0 : -50
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              RehabEase
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
