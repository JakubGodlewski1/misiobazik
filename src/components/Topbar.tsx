'use client'
import phone from "./../../public/icons/phone.svg"
import clock from "./../../public/icons/clock.svg"
import mail from "./../../public/icons/mail.svg"
import Image from "next/image";
import {usePathname} from "next/navigation";

const Topbar = () => {

    return (
        <div className="hidden lg:flex bg-primary w-full gap-8 text-secondary justify-center h-8 items-center">
            <div className="flex gap-1.5 items-end">
                <Image width={20} height={20} src={clock} alt="Ikona zegara"/>
                <span className="-mb-1">Pon. - Pt. 6:30 - 17:00</span>
            </div>
            <div className="flex gap-1.5 items-end">
                <Image width={20} height={20} src={phone} alt="Ikona telefonu"/>
                <span className="-mb-1">661 400 422</span>
            </div>
            <div className="flex gap-1.5 items-end">
                <Image width={20} height={20} src={mail} alt="Ikona mail"/>
                <Email/>
            </div>
        </div>
    );
};

export default Topbar;

const Email = () => {
    const pathname = usePathname()

    //pathname includes either zlobek or przedszkole
    if (pathname.includes("zlobek")){
            return <span  className="-mb-1">zlobek@misiobazik.pl</span>
    }

     if (pathname.includes("przedszkole")){
            return <span  className="-mb-1">przedszkole@misiobazik.pl</span>
    }




}