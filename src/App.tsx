import Hero from "./features/Hero"
import Projects from "@/features/projects/Projects"
import Stats from "./features/stats/Stats"
import About from "./features/About"

const App = () => {
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
       <Hero />
       <Stats/>
       <Projects/>
       <About/>
    </main>
  )
}

export default App