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

    const isActive = (href:string) => {
        if (pathname.includes(href) && href !=="/"){
            return true
        }
        if (
            (pathname.split("/")[pathname.split("/").length-1] ==="zlobek" ||
            pathname.split("/")[pathname.split("/").length-1] ==="przedszkole" ) &&
            href === "/"
        ){
            return true
        }
    }

    return (
     <NavbarComponent onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} height="110px" maxWidth="2xl">
         <NavbarContent>
             <NavbarBrand>
                 <Link href={pathnamePrefix}>
                     <Image width={90} height={90} src={logo} alt="Logo"/>
                 </Link>
             </NavbarBrand>
         </NavbarContent>
         <NavbarContent className="gap-8 hidden lg:flex" justify="end">
             {
                 items.map(item=>{
                     return <NavbarItem key={item.href}>
                         <Link
                             onClick={()=>setIsMenuOpen(false)}
                             className={`text-xl text-primary font-semibold hover:text-primary/80 ${isActive(item.href) && "underline"} `}
                             href={pathnamePrefix + item.href}>
                             {item.label}
                         </Link>
                     </NavbarItem>
                 })
             }
         </NavbarContent>
         <NavbarMenuToggle className="lg:hidden"/>
         <NavbarMenu className="gap-3 flex flex-col items-center pt-8">
             {
                 items.map(item=>{
                     return <NavbarMenuItem key={item.label}>
                         <Link
                             onClick={()=>setIsMenuOpen(false)}
                             className={`text-primary text-2xl font-semibold hover:text-primary/80 ${isActive(item.href) && "underline"}`}
                             href={pathnamePrefix + item.href}>
                             {item.label}
                         </Link>
                     </NavbarMenuItem>
                 })
             }
         </NavbarMenu>
     </NavbarComponent>
    );
};


export default Navbar;