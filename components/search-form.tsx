"use client"

import { useState } from "react"
import { ArrowRightLeft, CalendarIcon, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export function SearchForm() {
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <RadioGroup defaultValue="one-way" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-way" id="one-way" />
                <label htmlFor="one-way">One Way</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="round-trip" id="round-trip" />
                <label htmlFor="round-trip">Round Trip</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="multi-city" id="multi-city" />
                <label htmlFor="multi-city">Multi City</label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid gap-2">
              <label htmlFor="from">From</label>
              <input
                id="from"
                placeholder="Dhaka"
                className="w-full rounded-md border px-3 py-2"
              />
              <span className="text-sm text-muted-foreground">
                Hazrat Shahjalal International Airport
              </span>
            </div>
            <div className="grid gap-2">
              <label htmlFor="to">To</label>
              <div className="relative">
                <input
                  id="to"
                  placeholder="Chittagong"
                  className="w-full rounded-md border px-3 py-2"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                  <span className="sr-only">Swap destinations</span>
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">
                Shah Amanat International
              </span>
            </div>
            <div className="grid gap-2">
              <label>Departure</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? (
                      departureDate.toDateString()
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <label>Return</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? (
                      returnDate.toDateString()
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid flex-1 gap-2">
              <label>Travelers & Booking Class</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    1 Traveler, Economy
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <div className="font-medium">Travelers</div>
                      <div className="flex items-center justify-between">
                        <span>Adults</span>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="outline">-</Button>
                          <span>1</span>
                          <Button size="icon" variant="outline">+</Button>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-medium">Booking Class</div>
                      <RadioGroup defaultValue="economy">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="economy" id="economy" />
                          <label htmlFor="economy">Economy</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" />
                          <label htmlFor="business">Business</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="first" id="first" />
                          <label htmlFor="first">First Class</label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <Button className="w-full">Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}