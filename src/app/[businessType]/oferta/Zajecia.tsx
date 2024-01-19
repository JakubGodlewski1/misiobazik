'use client'

import {Accordion, AccordionItem} from "@nextui-org/react";
import Markdown from "react-markdown";

const Zajecia = ({convertedClasses}:{convertedClasses: {title:string, text:string}[]}) => {

    return (
        <div className="max-w-screen-xl w-screen sm:w-[80vw] px-4 mt-12 mx-auto">
            <h1 className="">Zajęcia</h1>
            <Accordion className="[&_ul]:ml-10 [&_ul]:list-disc">
                {
                    convertedClasses.map(el => {
                        return <AccordionItem className="" key={el.title} title={el.title} aria-label={el.title}>
                            <Markdown className="whitespace-pre-line">{el.text}</Markdown>
                        </AccordionItem>
                    })
                }
            </Accordion>
        </div>
    )
        ;
};

export default Zajecia;