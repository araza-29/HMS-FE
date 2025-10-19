import Image from "next/image";
import styles from "./page.module.css";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="container mx-auto">
        <div className="text-center pt-12 pb-4">
          <h1 
            className="text-5xl font-bold text-[var(--theme-text)] mb-4"
            style={{ fontFamily: 'var(--theme-font-heading)' }}
          >
            Welcome to RehabEase
          </h1>
          <p 
            className="text-xl text-[var(--theme-text)]/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--theme-font-body)' }}
          >
            Your trusted partner in comprehensive healthcare management
          </p>
        </div>
        
        {/* Interactive Carousel */}
        <HeroCarousel />
      </section>
    </main>
  );
}
