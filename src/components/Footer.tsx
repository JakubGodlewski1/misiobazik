'use client'
import Image from "next/image";
import logo_footer from "./../../public/icons/logo_footer.png"
import Link from "next/link";
import mail from "./../../public/icons/mail.svg"
import phone from "./../../public/icons/phone.svg"
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import location from "./../../public/icons/location.svg"

const Footer = () => {
    const pathname = usePathname()
    const [businessType, setBusinessType] = useState<"zlobek" | "przedszkole">("zlobek")


    useEffect(() => {
        const business = pathname.includes("zlobek") ? "zlobek" : "przedszkole"
        setBusinessType(business)
    }, [pathname]);

    return (
        <footer className="bg-primary px-2 py-8  md:p-8 text-secondary">
            <div className="[&_a:hover]:underline grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                <Image className="hidden md:block" width={150} height={200} src={logo_footer} alt="logo stópki"/>
                <div className="hidden sm:flex flex-col text-2xl gap-8 uppercase">
                    <Link href={`/${businessType}/`}>Aktualności</Link>
                    <Link href={`/${businessType}/oferta`}>Oferta</Link>
                    <Link href={`/${businessType}/galeria`}>Galeria</Link>
                    <div className="lg:hidden flex flex-col gap-8">
                        <Link href={`/${businessType}/strefa-rodzica`}>Strefa rodzica</Link>
                        <Link href={`/${businessType}/kadra`}>Kadra</Link>
                    </div>
                </div>
                <div className="flex-col text-2xl gap-8 uppercase hidden lg:flex">
                    <Link href={`/${businessType}/strefa-rodzica`}>Strefa rodzica</Link>
                    <Link href={`/${businessType}/kadra`}>Kadra</Link>
                </div>
                <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-2">
                        <Image src={phone} alt="phone"/>
                        <a href="tel:661 400 422">661 400 422</a>
                    </div>
                      <div className="flex items-center gap-2">
                        <Image src={mail} alt="mail"/>
                          <Email businessType={businessType}/>
                    </div>
                   <Address businessType={businessType}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const Email = ({businessType}:{businessType:"zlobek" | "przedszkole"}) => {
    return <a href={`mailto:${businessType}@misiobazik.pl`}>{businessType}@misiobazik.pl</a>
};

const Address = ({businessType}:{businessType:"zlobek" | "przedszkole"}) => {
    return (
        <>
            {businessType === "zlobek" &&
                <div className="flex items-center gap-2 ml-1">
                    <Image src={location} alt="location"/>
                    <span>
                        Zamoyskiego 5/1-2<br/>
                        65-135 Zielona Góra <br/>
                        Godziny otwarcia: 6.30 - 17:00
                    </span>
                </div>
            }
        </>
    );
};
