'use client'
import {
    ButtonGroup,
    Navbar as NavbarComponent,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu, NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react"

import logo from "./../../public/icons/logo.svg"
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {replaceWord} from "@/lib/replaceWord";
import {useState} from "react";

const items = [
    {
        label: "Aktualności",
        href: "/"
    },
      {
        label: "Galeria",
        href: "/galeria"
    },
      {
        label: "Strefa rodzica",
        href: "/strefa-rodzica"
    },
      {
        label: "Oferta",
        href: "/oferta"
    },
      {
        label: "Kadra",
        href: "/kadra"
    }
]

const Navbar = () => {
    const pathname = usePathname()
    const pathnamePrefix = pathname.includes("zlobek") ? "/zlobek" : "/przedszkole"
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
     <NavbarComponent onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} height="110px" maxWidth="2xl">
         <NavbarContent>
             <NavbarBrand>
                 <Image width={90} height={90} src={logo} alt="Logo"/>
             </NavbarBrand>
         </NavbarContent>
         <NavbarContent className="hidden lg:flex" justify="end">
             {
                 items.map(item=>{
                     return <NavbarItem key={item.href}>
                         <Link
                             onClick={()=>setIsMenuOpen(false)}
                             className="text-xl text-primary font-semibold hover:text-primary/80" href={pathnamePrefix + item.href}>
                             {item.label}
                         </Link>
                     </NavbarItem>
                 })
             }
         <ToggleBusinessButtons closeMenu={()=>setIsMenuOpen(false)}/>
         </NavbarContent>
         <NavbarMenuToggle className="lg:hidden"/>
         <NavbarMenu className="text-center">
             {
                 items.map(item=>{
                     return <NavbarMenuItem key={item.label}>
                         <Link className="text-primary text-2xl font-semibold hover:text-primary/80" href={pathnamePrefix + item.href}>
                             {item.label}
                         </Link>
                     </NavbarMenuItem>
                 })
             }
             <NavbarMenuItem>
                 <ToggleBusinessButtons closeMenu={()=>setIsMenuOpen(false)}/>
             </NavbarMenuItem>
         </NavbarMenu>
     </NavbarComponent>
    );
};

export default Navbar;


const ToggleBusinessButtons = ({closeMenu}:{closeMenu:()=>void}) => {
    const pathname = usePathname()
    const active = `shadow-2xl`
    const inactive = 'bg-primary/80 scale-90'
    const businessType = pathname.includes("zlobek") ? "zlobek" : "przedszkole"

    return <ButtonGroup>
        <Link
            className={`btn text-lg rounded-r-none btn-primary text-accent ${businessType === "zlobek" ? active : inactive}`}
            href={replaceWord(pathname, "przedszkole", "zlobek")}>
           Żłobek
        </Link>
        <Link
            className={`btn text-lg rounded-l-none btn-primary text-accent ${businessType === "przedszkole" ? active : inactive}`}
            href={replaceWord(pathname, "zlobek", "przedszkole")}>
           Przedszkole
        </Link>
    </ButtonGroup>
}
