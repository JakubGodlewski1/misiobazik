'use client'
import {
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

    return (
     <NavbarComponent height="110px" maxWidth="2xl">
         <NavbarContent>
             <NavbarBrand>
                 <Image width={90} height={90} src={logo} alt="Logo"/>
             </NavbarBrand>
         </NavbarContent>
         <NavbarContent className="hidden sm:flex" justify="end">
             {
                 items.map(item=>{
                     return <NavbarItem key={item.href}>
                         <Link className="text-xl text-primary font-semibold hover:text-primary/80" href={pathnamePrefix + item.href}>
                             {item.label}
                         </Link>
                     </NavbarItem>
                 })
             }
         <ToggleBusinessButtons/>
         </NavbarContent>
         <NavbarMenuToggle className="sm:hidden"/>
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
                 <ToggleBusinessButtons/>
             </NavbarMenuItem>
         </NavbarMenu>
     </NavbarComponent>
    );
};

export default Navbar;


const ToggleBusinessButtons = () => {
    const pathname = usePathname()
    const activeBtnClasses = `btn shadow-2xl btn-primary join-item text-accent`
    const inactiveBtnClasses = 'btn btn-primary bg-primary/80 scale-90 join-item text-accent font-light'
    const businessType = pathname.includes("zlobek") ? "zlobek" : "przedszkole"

    return <div
        className="join"
    >
        <Link
            href={replaceWord(pathname, "przedszkole", "zlobek")}
            style={businessType === "zlobek" ? {boxShadow: "4px 4px 16px -2px rgba(0, 0, 0, 0.35)"} : {}}
            className={businessType === "zlobek" ? activeBtnClasses : inactiveBtnClasses}
        >
            Żłobek
        </Link>
        <Link
            href={replaceWord(pathname, "zlobek", "przedszkole")}
            style={businessType === "przedszkole" ? {boxShadow: "4px 4px 16px -2px rgba(0, 0, 0, 0.35)"} : {}}
            className={businessType === "przedszkole" ? activeBtnClasses : inactiveBtnClasses}
        >
            Przedszkole
        </Link>

    </div>
}
