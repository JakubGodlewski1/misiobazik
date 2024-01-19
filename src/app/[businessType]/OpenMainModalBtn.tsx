'use client'

import {useRef} from "react";
import closeIcon from "./../../../public/icons/close_orange.svg"
import phoneIcon from "./../../../public/icons/phone-orange.svg"
import head_teacher from "./../../../public/pics/head_teacher.jpg"
import Image from "next/image";
import {Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";

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

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <button
                className="mx-auto btn btn-md sm:btn-lg btn-primary text-white rounded-full"
                onClick={onOpen}>
                Umów się na obejrzenie placówki
            </button>
            <Modal className="overflow-hidden"
                backdrop="blur"
                placement="center"
                size="5xl"
                scrollBehavior="inside"
                classNames={{closeButton:"hidden", body:"p-0 overflow-hidden rounded-xl"}}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                            <ModalBody className="grid grid-cols-5 overflow-auto">
                                    <div className="flex flex-col col-span-5 md:col-span-3 max-h-full">
                                        <div className="p-4">
                                            <h1 className="text-left text-4xl sm:text-5xl mr-4">Zadzwoń i umów się na
                                                spotkanie
                                                w {businessType === "zlobek" ? "żłobku" : "przedszkolu"}</h1>
                                            <div className="flex gap-4 mt-auto">
                                                <Image className="sm:scale-[1.5] scale-[1.2]" src={phoneIcon}
                                                       alt="Ikona telefonu"/>
                                                <a  href="tel:661 400 422" className="underline text-3xl sm:text-5xl font-bold text-primary">661 400 422</a>
                                            </div>
                                        </div>
                                        <div
                                            className="bg-secondary-content mt-auto pl-4 pt-8 pb-2 mr-8"
                                            style={{borderRadius: "0% 100% 5% 86% / 100% 70% 30% 0%"}}>
                                            <span className="text-2xl">Podczas spotkania dowiesz się:</span>
                                            <ul className="text-lg list-disc ml-4 mt-4">
                                                {
                                                    information.map(info => {
                                                        return <li key={info}>{info}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                <div className="relative col-span-2">
                                 <Image className="object-cover h-full hidden md:block " src={head_teacher} alt="Zdjęcie dyrektorki"/>
                                </div>

                                    <Image className="absolute top-0 right-0 cursor-pointer p-1" onClick={onClose}
                                           height={45} width={45} src={closeIcon} alt="Zamknij"/>

                            </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default OpenMainModalBtn;