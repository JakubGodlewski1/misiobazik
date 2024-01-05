'use client'

import {useRef} from "react";
import closeIcon from "./../../../public/icons/close_orange.svg"
import phoneIcon from "./../../../public/icons/phone-orange.svg"
import head_teacher from "./../../../public/pics/head_teacher.jpg"
import Image from "next/image";

const information: string[] = [
    "jak wygląda placówka, sale, łazienka, plac zabaw,",
    " ile jest grup w żłobku i ilu wychowawców prowadzi jedną grupę,",
    "jak wygląda adaptacja,",
    "jakie są opłaty związane z opieką, edukacją i wychowaniem maluchów,",
    "jakie są zasady bezpieczeństwa w żłobku,",
    "jakie zajęcia prowadzimy z maluchami,",
    "jak wyglądają posiłki,",
    "czy dzieci uczestniczą w spacerach,",
    "i dużo, dużo więcej!"
]


const OpenMainModalBtn = ({businessType}:{businessType:"zlobek" | "przedszkole"}) => {
    const dialogRef= useRef<HTMLDialogElement>(null)

    const openDialog = () =>{
        if (dialogRef.current){
            dialogRef.current.showModal()
        }
    }

    const closeDialog = () =>{
        if (dialogRef.current){
            dialogRef.current.close()
        }
    }

    return (
        <>
            <button
               onClick={openDialog}
                className="mx-auto btn btn-lg btn-primary text-white rounded-full">
                Umów się na obejrzenie placówki
            </button>

            {/*dialog*/}
            <dialog className="rounded-lg overflow-y-scroll overflow-x-hidden" ref={dialogRef}>
                <div className="w-[1100px] max-w-[90vw] h-[600px] max-h-[90vh] flex">
                    <div className="min-w-[65%] flex flex-col">
                        <div className="p-4">
                            <h1 className="text-left">Zadzwoń i umów się na spotkanie
                                w {businessType === "zlobek" ? "żłobku" : "przedszkolu"}</h1>
                            <div className="flex gap-4 mt-auto">
                                <Image height={60} src={phoneIcon} alt="Ikona telefonu"/>
                                <span className="text-5xl font-bold text-primary">661 400 422</span>
                            </div>
                        </div>
                        <div

                            className="bg-secondary-content mt-auto pl-4 pt-8 pb-2 mr-8 "
                            style={{borderRadius: "0% 100% 5% 86% / 100% 70% 30% 0%"}}>
                            <span className="text-2xl">Podczas spotkania dowiesz się:</span>
                            <ul className="text-lg list-disc ml-4 mt-4">
                            {
                                    information.map(info=>{
                                        return <li key={info}>{info}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <Image className="object-cover" src={head_teacher} alt="Zdjęcie dyrektorki"/>
                   <Image className="absolute top-0 right-0 cursor-pointer p-1" onClick={closeDialog} height={45} width={45} src={closeIcon} alt="Zamknij"/>
                </div>
            </dialog>
        </>
    );
};

export default OpenMainModalBtn;