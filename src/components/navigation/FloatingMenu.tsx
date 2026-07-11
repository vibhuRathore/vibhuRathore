import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import { useState } from "react";

const FloatingMenu = () => {
    const [active, setActive] = useState('#hero');
  return <div className="fixed right-10 top-1/2 -translate-y-1/2 bg-black border border-neutral-500 pt-4 rounded-full z-10  lg:block hidden">
    {navLinks.map((link)=>{
        const Icon = link.icon;
        return (
            <a key={link.label} href={link.link} aria-label={link.label} onClick={()=> setActive(link.link)} className={cn('text-neutral-400 flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors duration-200 mb-6 px-4',active==link.link && 'text-primary')}>
                <Icon className="size-5"/>
            </a>
        )
    })}
  </div>
}

export default FloatingMenu
