import OpenReadMoreModalBtn from "@/app/[businessType]/OpenReadMoreModalBtn";
import Image from "next/image";


const AktualnosciCart = ({imgSrc, text, title}:{imgSrc:string, text: string, title:string}) => {

    return (
        <div className="flex flex-col text-[#000] bg-secondary-content rounded-lg overflow-hidden shadow-2xl">
            <div className="relative h-72 w-full">
                <Image className="object-cover" fill={true} src={imgSrc} alt="zdjęcie"></Image>
            </div>
            <div className="p-6 flex flex-col gap-4 grow">
                <h2 className="text-xl text-center font-bold">{title}</h2>
                <p className="text-center">{text.slice(0, 250)+"..."}</p>
                <OpenReadMoreModalBtn newsData={{imgSrc, text, title}} classname="underline text-primary font-semibold mt-auto">
                    Czytaj dalej
                </OpenReadMoreModalBtn>
            </div>
        </div>

    );
};

export default AktualnosciCart;