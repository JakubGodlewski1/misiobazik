import React, {ReactNode} from 'react';
import Image from "next/image";
import asterisk from "./../../../../public/icons/asterisk.svg"

const StrefaRodzicaCart = ({title, children}: {title?:string, children: ReactNode}) => {
    return (
        <div className="flex flex-col items-center gap-10">
            <Image src={asterisk} alt="Ikona gwiazki"/>
            {title && <h3 className="underline text-xl font-light">{title}</h3>}
            {children}
        </div>
    );
};

export default StrefaRodzicaCart;