import { NavigationTabs } from "../components/tabs/navigation-tabs"
import { SearchForm } from "@/components/search-form"

export default function Home() {
  return (
    <div className="container py-6">
      <NavigationTabs />
      <div className="mt-6">
        <SearchForm />
      </div>
    </div>
  )
}