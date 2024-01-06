'use client'
import useEmblaCarousel from 'embla-carousel-react'
import PlanDnia from "@/app/[businessType]/oferta/PlanDnia";
import {useCallback} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

type PlanTygodnia = {
    day: "Poniedziałek" | "Wtorek" | "Środa" | "Czwartek" | "Piątek",
    schedule: {[key: string]: string},
    accentColor: "primary" | "secondary"
}[]

const PlanDniaCarousel = ({planTygodnia, heading}:{planTygodnia:PlanTygodnia, heading:string}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <h1>Plan dnia - {heading}</h1>
            <div className="flex items-center px-2 rounded-lg justify-center">
                <button className="hidden sm:block rounded-full bg-secondary-content p-2" onClick={scrollPrev}>
                    <FaArrowLeft size={32}/>
                </button>
                <div className="overflow-hidden max-w-screen-lg shadow-2xl mb-12 sm:mx-3 rounded-lg" ref={emblaRef}>
                    <div className="flex">
                        {
                            planTygodnia.map(el => {
                                return <PlanDnia className="mx-auto grow-0 shrink-0 basis-[95%] sm:basis-full cursor-pointer"
                                                 key={el.day}
                                                 day={el.day} schedule={el.schedule} accentColor={el.accentColor}/>
                            })
                        }
                        {/*<div className="grow-0 shrink-0 basis-full">Slide 1</div>*/}
                    </div>
                </div>
                <button className="hidden sm:block rounded-full bg-secondary-content p-2" onClick={scrollNext}>
                    <FaArrowRight size={32}/>
                </button>
            </div>

        </>

    );
};

export default PlanDniaCarousel;