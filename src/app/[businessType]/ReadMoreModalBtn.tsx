'use client'

import {Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import close_orange from "../../../public/icons/close_orange.svg";
import Markdown from "react-markdown";

type Props = {
    newsData:{imgSrc:string, text: string, title:string},
    classname:string
}

const ReadMoreModalBtn = ({newsData:{imgSrc, text, title}, classname}:Props) => {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className={classname}>
                Czytaj dalej
            </button>
            <Modal
                backdrop="blur"
                className="overflow-hidden"
                classNames={{closeButton: "hidden", body:"bg-secondary-content p-0 overflow-hidden rounded-xl"}}
                size="xl"
                scrollBehavior="inside"
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
                            <div className="w-full min-h-[30vh] relative">
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

export default ReadMoreModalBtn;