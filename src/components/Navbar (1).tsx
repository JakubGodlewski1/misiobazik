'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        label: "Aktualności",
        href: "/"
    },
     {
        label: "Galeria",
        href: "/galeria"
    },
     {
        label: "Stefa rodzica",
        href: "/strefa-rodzica"
    },
     {
        label: "Oferta",
        href: "/oferta"
    },
     {
        label: "Kadra",
        href: "/kadra"
    },


]

const Navbar = () => {
    const pathname = usePathname()
    const pathnamePrefix = pathname.includes("zlobek") ? "/zlobek" : "/przedszkole"

    return (
       <nav className="bg-accent sticky top-0 z-10 h-16 items-center flex px-8 justify-between">
           logo
           <ul className="flex gap-8">
               {
                   links.map(link=> {
                       return <li key={link.href} >
                           <Link
                               className={`${pathname.includes(link.href)} text-primary font-semibold uppercase hover:text-primary/80`}
                               href={pathnamePrefix + link.href}>{link.label}</Link>
                       </li>
                   })
               }
           </ul>
       </nav>
    );
};

export default Navbar;