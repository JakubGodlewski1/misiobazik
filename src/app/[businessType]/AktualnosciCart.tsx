import ReadMoreModalBtn from "@/app/[businessType]/ReadMoreModalBtn";
import Image from "next/image";
import Markdown from "react-markdown";


const AktualnosciCart = ({imgSrc, text, title}:{imgSrc:string, text: string, title:string}) => {

    return (
        <div className="flex flex-col text-[#000] bg-secondary-content rounded-lg overflow-hidden shadow-2xl">
            <div className="relative h-72 w-full">
                <Image className="object-cover" fill={true} src={imgSrc} alt="zdjęcie"></Image>
            </div>
            <div className="p-6 flex flex-col gap-4 grow">
                <h2 className="text-xl text-center font-bold">{title}</h2>
                <Markdown className="text-center">{text.slice(0, 250)+ (text.length > 250 ? "..." : "")}</Markdown>
                <ReadMoreModalBtn
                    newsData={{imgSrc, text, title}}
                    classname="underline text-primary font-semibold mt-auto"
                />
            </div>
        </div>

    );
};

export default AktualnosciCart;