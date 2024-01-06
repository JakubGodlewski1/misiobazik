'use client'
import useEmblaCarousel from 'embla-carousel-react'
import PlanDnia from "@/app/[businessType]/oferta/PlanDnia";
import {useCallback, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {planTygodniaMlodszaGrupa, planTygodniaStarszaGrupa} from "@/data/planTygodnia";

const PlanDniaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [group, setGroup] = useState<typeof planTygodniaMlodszaGrupa | typeof planTygodniaStarszaGrupa>(planTygodniaMlodszaGrupa)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section>
            <h1>Plan dnia</h1>
            <select
                onChange={(e)=>setGroup(e.target.value === "younger" ? planTygodniaMlodszaGrupa : planTygodniaStarszaGrupa)}
                className="select select-md shadow-xl w-full max-w-xs mx-auto block text-lg mt-4 bg-secondary-content text-black">
                <option value="younger">Młodsza grupa</option>
                <option value="older">Starsza grupa</option>
            </select>

            <div className="flex items-center px-2 rounded-lg justify-center">
                <button className="hidden sm:block rounded-full bg-secondary-content p-2" onClick={scrollPrev}>
                    <FaArrowLeft size={32}/>
                </button>
                <div className="overflow-hidden max-w-screen-lg shadow-2xl mb-12 sm:mx-3 rounded-lg" ref={emblaRef}>
                    <div className="flex">
                        {
                            group.map(el => {
                                return <PlanDnia
                                    className="mx-auto grow-0 shrink-0 basis-[95%] sm:basis-full cursor-pointer"
                                    key={el.day}
                                    day={el.day} schedule={el.schedule} accentColor="secondary"/>
                            })
                        }
                    </div>
                </div>
                <button className="hidden sm:block rounded-full bg-secondary-content p-2" onClick={scrollNext}>
                    <FaArrowRight size={32}/>
                </button>
            </div>
        </section>

    );
};

export default PlanDniaCarousel;