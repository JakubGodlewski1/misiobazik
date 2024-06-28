'use client'
import useEmblaCarousel from "embla-carousel-react";
import {useCallback} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {galleryZamoyskiego} from "@/data/galleryLinks";
import Image from "next/image";

const GaleriaPage = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])



    return (
        <section>
            <div className="flex items-center px-2 rounded-lg justify-center mt- 4">
                <button className="hidden sm:block rounded-full bg-secondary-content p-2" onClick={scrollPrev}>
                    <FaArrowLeft size={32}/>
                </button>

                {/*carousel*/}
                <div
                    className="shadow-2xl mb-12 sm:mx-3 rounded-lg overflow-hidden w-[90vw] sm:w-[80vw] h-[80svh] sm:aspect-video"
                    ref={emblaRef}
                >
                    <div className="flex w-full h-full">
                        {
                            galleryZamoyskiego.map(pic => {
                                return <div
                                    className="mr-4 w-full h-full relative grow-0 shrink-0 basis-full cursor-pointer"
                                    key={pic.original}>
                                    <Image
                                        className="rounded-lg"
                                        fill={true}
                                        style={{objectFit:"contain"}}
                                        alt="Image"
                                        src={pic.original}
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>

                <button className="hidden sm:block rounded-full bg-secondary-content p-2" onClick={scrollNext}>
                    <FaArrowRight size={32}/>
                </button>
            </div>
        </section>
    )
};

export default GaleriaPage;
