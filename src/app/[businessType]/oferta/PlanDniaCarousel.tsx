'use client'
import useEmblaCarousel from 'embla-carousel-react'
import PlanDnia from "@/app/[businessType]/oferta/PlanDnia";
import {ChangeEvent, useCallback, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import
{planTygodniaStarszaGrupaZamoyskiego,
    planTygodniaMlodszaGrupaZamoyskiego ,
    planTygodniaStarszaGrupaWyspianskiego,
    planTygodniaMlodszaGrupaWyspianskiego}
    from "@/data/planTygodnia";

type Group =
    typeof planTygodniaMlodszaGrupaWyspianskiego |
    typeof planTygodniaStarszaGrupaWyspianskiego |
    typeof planTygodniaMlodszaGrupaZamoyskiego |
    typeof planTygodniaStarszaGrupaZamoyskiego

const PlanDniaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [group, setGroup] = useState<Group>(planTygodniaMlodszaGrupaZamoyskiego)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const groupObj = {
        "zamoyskiego_younger": planTygodniaMlodszaGrupaZamoyskiego,
        "zamoyskiego_older":planTygodniaStarszaGrupaZamoyskiego,
        "wyspianskiego_younger":planTygodniaMlodszaGrupaWyspianskiego,
        "wyspianskiego_older": planTygodniaStarszaGrupaWyspianskiego
    }

    const handleGroupChange = (e: ChangeEvent<HTMLSelectElement>) => {
        // @ts-ignore
        setGroup(groupObj[e.target.value])
    }

    return (
        <section>
            <h1>Plan dnia</h1>
            <select
                onChange={handleGroupChange}
                className="select select-md shadow-xl w-full max-w-xs mx-auto block text-lg mt-4 bg-secondary-content text-black">
                <option value="zamoyskiego_younger">Młodsza grupa - Zamoyskiego</option>
                <option value="zamoyskiego_older">Starsza grupa - Zamoyskiego</option>
                <option value="wyspianskiego_younger">Młodsza grupa - Wyspiańskiego</option>
                <option value="wyspianskiego_older">Starsza grupa - Wyspiańskiego</option>
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