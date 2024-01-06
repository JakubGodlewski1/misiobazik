'use client'
import {ReactNode,  useRef} from "react";


import ClientOnlyPortal from "@/components/ClientOnlyPortal";
import ReadMoreModal from "@/app/[businessType]/ReadMoreModal";


type Props = {
    newsData:{imgSrc:string, text: string, title:string},
    children:ReactNode,
    classname:string
}

const OpenReadMoreModalBtn = ({newsData, children, classname}:Props) => {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const handleOpen = () => {modalRef.current?.showModal()}

    const handleClose = () => {modalRef.current?.close()}

    return (
        <>
            <button onClick={handleOpen} className={classname}>
                {children}
            </button>
            <ClientOnlyPortal selector="#read-more-modal">
                <ReadMoreModal newsData={newsData} ref={modalRef} handleClose={handleClose}/>
            </ClientOnlyPortal>
        </>
    );
};

export default OpenReadMoreModalBtn;