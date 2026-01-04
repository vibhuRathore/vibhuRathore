import type { ExperienceType } from "@/types"


const EducationCard = ({item}:{item:ExperienceType}) => {
  return (
    <div className="relative group">
        <div className="absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary
        rounded-full transition duration-300"></div>
        <span className="text-neutral-400 lining-nums group-hover:bg-primary transition duration-300">{item.year}</span>
        <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
        <p className="text-sm text-neutral-400 mb-1 font-medium text-foreground">{item.institute}</p>
    </div>
  )
}

export default EducationCard