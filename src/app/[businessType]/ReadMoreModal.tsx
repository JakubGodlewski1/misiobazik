import {ForwardedRef, forwardRef} from 'react';
import close_orange from "./../../../public/icons/close_orange.svg"
import Image from "next/image";
import Markdown from "react-markdown";

type Props = {
    handleClose: () => void,
    newsData: {imgSrc:string, text: string, title:string}
}

const ReadMoreModal = ({ handleClose, newsData }: Props, ref: ForwardedRef<HTMLDialogElement | null>) => {
    if(!newsData.title)return <></>
       const {text, title, imgSrc} = newsData

    return (
        <dialog ref={ref} className="rounded-lg w-[1536px] max-w-[95vw]">
            <style>{dialogAnimation}</style>
            <div style={{height:'90vh', width:"100%"}} className="bg-secondary-content ">
                <button onClick={handleClose} className=" z-30 absolute -top-0 sm:top-1 -right-0 sm:right-2 pb-4 pl-4">
                    <Image src={close_orange} height={50} width={50} alt="zamknij stronę"/>
                </button>
                <div className="w-screen h-[30vh] relative">
                    <Image fill={true} className="object-cover" src={imgSrc} alt="Zdjęcie w tle"/>
                </div>
                <div className="p-8 bg-secondary-content text-center sm:text-left">
                    <h1 className="heading sm:flex mr-auto">{title}</h1>
                    <Markdown className="whitespace-pre-line">{text}</Markdown>
                </div>
            </div>
        </dialog>
    );
};

export default forwardRef(ReadMoreModal);

const dialogAnimation = `
@keyframes dialogOpen {
    from {
        transform: scale(0%);
    }

    to {
        transform: scale(100%);
    }
}
dialog{
animation: dialogOpen 0.5s
}

dialog::backdrop{
animation: dialogOpen 0.3s
}
`