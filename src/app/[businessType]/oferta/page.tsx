'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";
import {zajeciaKindergarten, zajeciaNursery} from "@/data/oferta";
import parse from 'html-react-parser';
import Jadlospis from "@/app/[businessType]/oferta/Jadlospis";
import PlanDniaCarousel from "@/app/[businessType]/oferta/PlanDniaCarousel";
import {contentfulClient} from "@/clients/contentful";

const OfertaPage = ({params:{businessType}}:{params:{businessType:"zlobek" | "przedszkole"}}) => {
    const classes = businessType === "zlobek" ? zajeciaNursery : zajeciaKindergarten

    return (
        <div className="flex flex-col gap-6">
            <section className="max-w-screen-xl w-screen sm:w-[80vw] px-4 mt-12 mx-auto">
                <h1 className="">Zajęcia</h1>
                <Accordion className="[&_ul]:ml-10">
                    {
                        classes.map(el => {
                            return <AccordionItem key={el.title} title={el.title} aria-label={el.title}>
                                {el.content && parse(el.content)}
                            </AccordionItem>
                        })
                    }
                </Accordion>
            </section>
            <Jadlospis/>
            <PlanDniaCarousel/>

        </div>
    );
};

export default OfertaPage;