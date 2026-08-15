import { socialLinks } from "@/constants"
import { Button } from "@/components/ui/button"

const Profile = () => {
    return (
        <aside className="mx-4 my-6 max-w-[calc(100vw-2rem)] border border-border bg-card text-card-foreground p-5 rounded-lg sm:mx-6 sm:max-w-3xl sm:p-6 lg:sticky lg:left-0 lg:top-6 lg:w-96">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-x-10 sm:text-left">
                    <h1 className="text-3xl font-bold">Vibhu Rathore</h1>
                    <p className="text-sm">Full Stack Engineer</p>
                </div>
                <img src='/Image.jpeg' alt="Vibhu Rathore portrait" width={610} height={800} loading="eager" decoding="async" className="w-full rounded-2xl object-cover" />

                <div className="mt-6">
                    <p className="text-sm text-muted-foreground">Specialization :</p>

                    <p className="text-lg capitalize">Full Stack development</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Based In :</p>

                    <p className="text-lg capitalize">Chandigarh, India</p>
                </div>

                <div className="flex gap-3 pt-2 text-muted-foreground">
                    {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return social.link ? (
                            <a key={i} href={social.link} aria-label={social.label} className="hover:text-primary border-2 border-border p-2 rounded-full hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition duration-200">
                                <Icon className='size-6' />
                            </a>
                        ) : (
                            <span key={i} aria-label={`${social.label} profile unavailable`} aria-disabled="true" className="border-2 border-border p-2 rounded-full opacity-40">
                                <Icon className='size-6' />
                            </span>
                        )
                    })}
                </div>

                <Button className="mt-2" size='lg' asChild>
                    <a href="#contact">Let's Work</a>
                </Button>

            </div>
        </aside>
    )
}

export default Profile
