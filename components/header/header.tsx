"use client"

import { Bell, Globe, Menu, Moon, Search, Sun, User } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function Header() {
  const { setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <div className="flex w-full items-center gap-4">
          <span className="hidden font-bold md:inline-block">Travel</span>
          <div className="flex flex-1 items-center gap-4">
            <form className="flex-1 md:max-w-sm lg:max-w-lg">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search flights, hotels, visa services..."
                  className="pl-8"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Select language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
                <DropdownMenuItem>Italiano</DropdownMenuItem>
                <DropdownMenuItem>Português</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="sr-only">View notifications</span>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme("dark")}
              className="hidden dark:inline-flex"
            >
              <Sun className="h-5 w-5" />
              <span className="sr-only">Light mode</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme("light")}
              className="inline-flex dark:hidden"
            >
              <Moon className="h-5 w-5" />
              <span className="sr-only">Dark mode</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}