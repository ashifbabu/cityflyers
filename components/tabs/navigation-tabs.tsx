"use client"

import { CreditCard, FileText, Building2, Plane } from 'lucide-react'
import { Button } from "@/components/ui/button"

const tabs = [
  {
    id: "flight",
    label: "Flight",
    icon: Plane,
  },
  {
    id: "hotel",
    label: "Hotel",
    icon: Building2,
  },
  {
    id: "visa",
    label: "Visa",
    icon: FileText,
  },
  {
    id: "esim",
    label: "eSim",
    icon: CreditCard,
  },
]

export function NavigationTabs() {
  return (
    <div className="flex gap-4 border-b">
      {tabs.map((tab) => {
        const Icon = tab.icon
        return (
          <Button
            key={tab.id}
            variant={tab.id === "flight" ? "secondary" : "ghost"}
            className="relative h-9 rounded-none border-b-2 border-transparent px-4"
          >
            <Icon className="mr-2 h-4 w-4" />
            {tab.label}
          </Button>
        )
      })}
    </div>
  )
}