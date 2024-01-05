import Image from "next/image";
import person_placeholder from "@/public/pics/placeholder_person.png"

const EmployeeCart = ({reverse=false, description, imgSrc}:{reverse?: boolean, description: string, imgSrc: string}) => {
    return (
        <div className={`flex flex-col border-secondary border-2 rounded-3xl max-w-5xl mx-auto overflow-hidden sm:flex-row ${reverse ? "sm:flex-row-reverse" : ""}`}>
            <img className="w-full sm:w-[30%] min-h-[300px] max-h-[600px] md:max-h-[10000px] object-cover" src={imgSrc} alt="pracownik zdjęcie"/>
            <p className="p-4 italic text-lg text-center sm:text-left">
                {description}
            </p>
        </div>
    );
};

export default EmployeeCart;