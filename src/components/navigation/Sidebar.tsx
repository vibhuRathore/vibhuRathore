import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import { navLinks, socialLinks } from '@/constants';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [active, setActive] = useState('#hero');

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="m-4 fixed top-4 right-4 z-50 border-2 hover:border-primary bg-card py-5 px-5 rounded-full hover:text-primary cursor-pointer"
          aria-label="Open menu"
        >
          <MenuIcon size={30} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-84 bg-card text-card-foreground py-6 pl-10">
        <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>

        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.link}
                onClick={() => setActive(link.link)}
                aria-label={link.label}
                className={cn(
                  'text-muted-foreground flex items-center gap-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors duration-200 text-base',
                  active === link.link && 'text-primary'
                )}
              >
                <Icon className="size-4" /> {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-30">
          <p className="pb-2">Socials</p>
          <div className="flex gap-3 text-muted-foreground">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return social.link ? (
                <a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  className="hover:text-primary border-2 border-border p-2 rounded-full hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition duration-200"
                >
                  <Icon className="size-4" />
                </a>
              ) : (
                <span
                  key={i}
                  aria-label={`${social.label} profile unavailable`}
                  aria-disabled="true"
                  className="border-2 border-border p-2 rounded-full opacity-40"
                >
                  <Icon className="size-4" />
                </span>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
