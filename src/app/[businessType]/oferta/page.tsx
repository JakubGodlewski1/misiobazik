'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";
import {zajeciaKindergarten, zajeciaNursery} from "@/data/oferta";
import parse from 'html-react-parser';
import Jadlospis from "@/app/[businessType]/oferta/Jadlospis";


const OfertaPage = ({params:{businessType}}:{params:{businessType:"zlobek" | "przedszkole"}}) => {
    const classes = businessType === "zlobek" ? zajeciaNursery : zajeciaKindergarten

    return (
        <>
            <section className="max-w-screen-xl mx-auto px-4 mt-12">
                <h1 className="">Zajęcia</h1>
                <Accordion className="[&>*>*>ul]:ml-10">
                    {
                        classes.map(el=>{
                            return <AccordionItem  key={el.title} title={el.title} aria-label={el.title}>
                                    {el.content && parse(el.content)}
                            </AccordionItem>
                        })
                    }
                </Accordion>
            </section>
            <Jadlospis/>
        </>
    );
};

export default OfertaPage;