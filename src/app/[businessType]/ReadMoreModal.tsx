'use client'
import {ForwardedRef, forwardRef} from 'react';
import close_orange from "./../../../public/icons/close_orange.svg"
import Image from "next/image";
import Markdown from "react-markdown";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
   useDisclosure
} from "@nextui-org/react";

type Props = {className: string, newsData: {imgSrc:string, text: string, title:string} }

const ReadMoreModal = ({className, newsData }: Props, ref: ForwardedRef<HTMLDialogElement | null>) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    if(!newsData.title)return <></>
       const {text, title, imgSrc} = newsData


    return (
        <>
            <button className={className} onClick={onOpen}>Open Modal</button>
            <Modal>
                <ModalContent>
                    <ModalHeader className="flex justify-between">
                        <h3>{title}</h3>
                        <Image src={close_orange} height={50} width={50} alt="zamknij stronę"/>
                    </ModalHeader>
                    <ModalBody>
                        <div style={{height: '90vh', width: "100%"}}
                             className="bg-secondary-content overflow-hidden">

                            <div className="h-[30vh] relative">
                                <Image fill={true} className="object-cover" src={imgSrc} alt="Zdjęcie w tle"/>
                            </div>
                            <div className="p-2 pt-8 sm:p-8 bg-secondary-content text-center sm:text-left">
                                <h1 className="heading sm:flex mr-auto">{title}</h1>
                                <Markdown className="whitespace-pre-line">{text}</Markdown>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    );
};

export default forwardRef(ReadMoreModal);