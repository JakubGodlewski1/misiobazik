import Image from "next/image";
import kindergarten_hero_phone from "./../../../public/pics/kindergarten_hero_phone.jpg"
import nursery_hero_phone from "./../../../public/pics/nursery_hero_phone.jpg"
import nursery_hero_desktop from "./../../../public/pics/nursery_hero_desktop.jpg"
import OpenMainModalBtn from "@/app/[businessType]/OpenMainModalBtn";

const AktualnosciPage = ({params: {businessType}}:{params:{businessType: "zlobek" | "przedszkole"}}) => {

    return (
        <div className="h-[calc(100vh-142px)] flex flex-col">
            <div className="flex-grow relative">
                <Image
                    src={kindergarten_hero_phone}
                    layout="fill"
                    objectFit="cover"
                    alt="Główne zdjęcie"
                />
            </div>
            <div className="h-48 flex flex-col bg-secondary-content justify-center">
                <h1 className="mb-4">Nabór do {businessType === "zlobek" ? "żłobka" : "przedszkola"} trwa cały rok</h1>
                <OpenMainModalBtn businessType={businessType}/>
            </div>
        </div>
    );
};

export default AktualnosciPage;