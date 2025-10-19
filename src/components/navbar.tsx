"use client"

import Link from "next/link"
import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const services: { title: string; href: string; description: string }[] = [
  {
    title: "Emergency",
    href: "/services/emergency",
    description: "24/7 emergency medical care and ambulance services.",
  },
  {
    title: "Surgery",
    href: "/services/surgery",
    description: "Advanced surgical procedures with experienced surgeons.",
  },
  {
    title: "Diagnostics",
    href: "/services/diagnostics",
    description: "Complete diagnostic services including lab tests and imaging.",
  },
  {
    title: "Pharmacy",
    href: "/services/pharmacy",
    description: "In-house pharmacy with wide range of medications.",
  },
  {
    title: "Cardiology",
    href: "/services/cardiology",
    description: "Comprehensive heart care and cardiovascular treatment.",
  },
  {
    title: "Pediatrics",
    href: "/services/pediatrics",
    description: "Specialized care for infants, children, and adolescents.",
  },
]


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--theme-primary)]/20 bg-[var(--theme-primary)] shadow-sm overflow-visible">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between overflow-visible">
        {/* Left Navigation Items */}
        <NavigationMenu className="text-[var(--theme-text)] overflow-visible">
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[var(--theme-primary)] text-[var(--theme-text)] hover:bg-[var(--theme-primary)]/80 focus:bg-[var(--theme-primary)]/80 data-[active]:bg-[var(--theme-primary)]/90 data-[state=open]:bg-[var(--theme-primary)]/90">Getting started</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border border-gray-200">
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-50 to-rose-100 p-6 no-underline outline-none focus:shadow-md hover:from-rose-100 hover:to-rose-200"
                            href="/"
                        >
                            <div className="mb-2 mt-4 text-lg font-medium text-[var(--theme-primary)]" style={{ fontFamily: 'var(--theme-font-heading)' }}>
                            Hospital Management
                            </div>
                            <p className="text-sm leading-tight text-gray-600" style={{ fontFamily: 'var(--theme-font-body)' }}>
                            Complete healthcare management solution for modern hospitals.
                            </p>
                        </a>
                        </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="About Us">
                        Learn more about our hospital and our mission.
                    </ListItem>
                    <ListItem href="/doctors" title="Our Doctors">
                        Meet our team of experienced medical professionals.
                    </ListItem>
                    <ListItem href="/contact" title="Contact">
                        Get in touch with us for inquiries and appointments.
                    </ListItem>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[var(--theme-text)] hover:bg-[var(--theme-text)]/10 focus:bg-[var(--theme-text)]/10 data-[active]:bg-[var(--theme-text)]/10 data-[state=open]:bg-[var(--theme-text)]/10">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border border-gray-200">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {services.map((service) => (
                        <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                        >
                        {service.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        {/* Center Title */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="RehabEase Logo" 
            width={32} 
            height={32}
            className="object-contain"
          />
          <span className="font-bold text-2xl text-[var(--theme-text)]" style={{ fontFamily: 'var(--theme-font-heading)' }}>RehabEase</span>
        </Link>

        {/* Right Navigation Items */}
        <NavigationMenu className="text-[var(--theme-text)] overflow-visible">
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href="/appointments" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[var(--theme-text)] hover:bg-[var(--theme-text)]/10")}>
                    Appointments
                    </Link>
                </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href="/dashboard" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[var(--theme-text)] hover:bg-[var(--theme-text)]/10")}>
                    Dashboard
                    </Link>
                </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-rose-50 focus:bg-rose-50 text-gray-900",
            className
          )}
          style={{ fontFamily: 'var(--theme-font-body)' }}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-[var(--theme-primary)]" style={{ fontFamily: 'var(--theme-font-heading)' }}>{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600" style={{ fontFamily: 'var(--theme-font-body)' }}>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
