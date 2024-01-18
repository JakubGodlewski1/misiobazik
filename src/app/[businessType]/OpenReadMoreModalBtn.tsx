'use client'
import {ReactNode,  useRef} from "react";


import ClientOnlyPortal from "@/components/ClientOnlyPortal";
import ReadMoreModal from "@/app/[businessType]/ReadMoreModal";
import {Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import close_orange from "../../../public/icons/close_orange.svg";
import Markdown from "react-markdown";


type Props = {
    newsData:{imgSrc:string, text: string, title:string},
    children:ReactNode,
    classname:string
}

const OpenReadMoreModalBtn = ({newsData:{imgSrc, text, title}, children, classname}:Props) => {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();



    return (
        <>
            <button onClick={onOpen} className={classname}>
                {children}
            </button>
            <Modal
                size="xl"
                scrollBehavior="inside"
                className="bg-secondary-content p-0 overflow-hidden"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                      <Image
                          onClick={onClose} className="absolute top-2 right-2 z-20 cursor-pointer"
                          src={close_orange}
                          height={50}
                          width={50}
                          alt="zamknij stronę"
                      />
                    <ModalBody className="p-0 max-w-full overflow-y-scroll">
                            <div className="h-[30vh] relative">
                                <Image fill={true} className="object-cover" src={imgSrc} alt="Zdjęcie w tle"/>
                            </div>
                            <div className="p-2 pt-8 sm:p-8 text-center sm:text-left">
                                <h1 className="heading sm:flex mr-auto">{title}</h1>
                                <Markdown className="whitespace-pre-line">{text}</Markdown>
                            </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default OpenReadMoreModalBtn;