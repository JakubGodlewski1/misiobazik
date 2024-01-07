'use client'
import phone from "./../../public/icons/phone.svg"
import clock from "./../../public/icons/clock.svg"
import mail from "./../../public/icons/mail.svg"
import Image from "next/image";
import {usePathname} from "next/navigation";

const Topbar = () => {
    return (
        <div className="hidden lg:flex bg-primary w-full gap-8 text-secondary justify-center h-8 items-center z-10">
            <div className="gap-1.5 items-end flex">
                <Image width={20} height={20} src={clock} alt="Ikona zegara"/>
                <span className="-mb-1">Pon. - Pt. 6:30 - 17:00</span>
            </div>
            <div className="flex gap-1.5 items-end">
                <Image width={20} height={20} src={phone} alt="Ikona telefonu"/>
                <a className="-mb-1 hover:underline" href="tel:661 400 422">661 400 422</a>
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
    const businessType = pathname.includes("zlobek") ? "zlobek" : "przedszkole"
    return <a className="-mb-1 hover:underline" href={`mailto:${businessType}@misiobazik.pl`}>{businessType}@misiobazik.pl</a>
}