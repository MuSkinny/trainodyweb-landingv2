import { CircleUser, Dumbbell, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import LanguageSwitcher from "./language-switcher";
import logo from "@/public/trainody-logo.svg";
import type { Lang } from "@/lib/i18n";

const Brand = ({ withText = true }: { withText?: boolean }) => (
  <span className="flex items-center gap-2">
    <Image
      src={logo}
      alt="Trainody"
      width={36}
      height={36}
      unoptimized
      className="rounded-lg"
    />
    {withText && (
      <span className="font-display text-lg uppercase tracking-tight text-foreground">
        Trainody
      </span>
    )}
  </span>
);

const menuContent = [
  {
    href: "#funzioni",
    title: { it: "Funzionalità", en: "Features", es: "Funciones" },
  },
  {
    href: "#pricing",
    title: { it: "Prezzi", en: "Pricing", es: "Precios" },
  },
  {
    href: "#faq",
    title: { it: "FAQ", en: "FAQ", es: "FAQ" },
  },
];

const sheetTitle: Record<Lang, string> = {
  it: "Menu di navigazione",
  en: "Navigation menu",
  es: "Menú de navegación",
};

const Header = ({lang}: {lang: Lang}) => {
  return (
    <header className="w-full absolute flex justify-between h-16 items-center gap-4 px-4 md:px-6 z-50 bg-transparent">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between w-full md:gap-5 md:text-sm lg:gap-6">
            <Link href={`/${lang}`} className="flex items-center">
              <Brand />
            </Link>
            <div className="flex items-center gap-x-6 px-2">
              {menuContent.map((content: any, i: number) => (
                <Link
                    key={i}
                    href={content.href}
                    className="text-foreground/80 transition-colors hover:text-primary"
                >
                    {content.title[lang]}
                </Link>
              ))}
              <LanguageSwitcher lang={lang} />
              <a href="https://app.trainody.com/sign-in" className="bg-primary px-4 py-1 text-black rounded-lg">Login</a>
            </div>
        </nav>
        <Link href={`/${lang}`} className="md:hidden">
          <Brand />
        </Link>
        
        <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="shrink-0 md:hidden bg-surface text-foreground border border-border hover:bg-surface-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
            <SheetTitle className="sr-only">{sheetTitle[lang]}</SheetTitle>
            <nav className="flex flex-col gap-6 text-lg font-medium">
                <Link href={`/${lang}`} className="flex items-center gap-2">
                  <Brand />
                  <span className="sr-only">Trainody</span>
                </Link>

                <div className="flex flex-col gap-4 border-t border-border pt-6">
                  {menuContent.map((content: any, i: number) => (
                  <Link
                      key={i}
                      href={content.href}
                      className="text-foreground/80 transition-colors hover:text-primary"
                  >
                      {content.title[lang]}
                  </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-4 border-t border-border pt-6">
                  <LanguageSwitcher lang={lang} />
                  <a
                    href="https://app.trainody.com/sign-in"
                    className="rounded-lg bg-primary px-4 py-2.5 text-center font-display text-sm uppercase tracking-wide text-primary-foreground"
                  >
                    Login
                  </a>
                </div>
            </nav>
            </SheetContent>
        </Sheet>
        
        {/*
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative"></div>
            </form>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          
        </div>
        */}
    </header>
  );
};

export default Header;
