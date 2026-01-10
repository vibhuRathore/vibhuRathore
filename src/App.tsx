import Hero from "./features/Hero"
import Projects from "@/features/projects/Projects"
import Stats from "./features/stats/Stats"
import About from "./features/About"
import Resume from "./features/Resume/Resume"
import Tools from "./features/Tools/Tool"
// import Services from "./features/Services/Services"

const App = () => {
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl">
       <Hero />
       <Stats/>
       <Projects/>
       <About/>
       {/* <Services/> */}
       <Resume/>
       <Tools/>
    </main>
  )
}

export default App