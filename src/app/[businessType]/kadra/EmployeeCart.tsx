import Image from "next/image";

const EmployeeCart = ({description, imgSrc}:{ description: string, imgSrc: string}) => {
    return (
        <div className="border-secondary border-2 rounded-3xl max-w-5xl mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-4">
            <div className="

            relative
            md:col-span-1
            min-h-[500px]
            md:min-h-[300px]

          ">
                <Image fill={true} className="object-cover" src={imgSrc} alt="pracownik zdjęcie"/>
            </div>
            <p className="md:col-span-3 p-4 italic text-lg text-center sm:text-left">
                {description}
            </p>
        </div>
    );
};

export default EmployeeCart;