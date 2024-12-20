"use client"

import Link from "next/link"
import { BookmarkIcon as Blog, Building2, Car, Calendar, CreditCard, FileText, Heart, Home, Newspaper, Plane, Shield, Tag } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Building2 },
  { name: "Flights", href: "/flights", icon: Plane },
  { name: "Hotels", href: "/hotels", icon: Building2 },
  { name: "Holidays", href: "/holidays", icon: Calendar },
  { name: "Cars", href: "/cars", icon: Car },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Visa", href: "/visa", icon: FileText },
  { name: "Travel Insurance", href: "/insurance", icon: Shield },
  { name: "Travel Advisory", href: "/advisory", icon: Heart },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Promotions", href: "/promotions", icon: Tag },
]

export function Sidebar() {
  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-full flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            Travel
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  asChild
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={item.href}>
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}