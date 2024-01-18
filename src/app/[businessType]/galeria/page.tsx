'use client'
import useEmblaCarousel from "embla-carousel-react";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {galleryZamoyskiego, galleryWyspianskiego, galleryKindergarten} from "@/data/galleryLinks";
import Image from "next/image";

const GaleriaPage = ({params:{businessType}}:{params:{businessType:"zlobek" | "przedszkole"}}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [nurseryLocation, setNurseryLocation] = useState<"zamoyskiego" | "wyspianskiego">("zamoyskiego")
   const [gallery, setGallery] = useState(galleryZamoyskiego)

    useEffect(() => {
        if (businessType==="zlobek"){
            if (nurseryLocation === "wyspianskiego"){
                setGallery(galleryWyspianskiego)
            }else setGallery(galleryZamoyskiego)
        }
        if (businessType ==="przedszkole"){
           setGallery(galleryKindergarten)
        }
    }, [businessType, nurseryLocation]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section>
            {
                businessType === "zlobek" &&
                <select
                    onChange={(e)=>setNurseryLocation(e.target.value as "zamoyskiego" | "wyspianskiego")}
                    className="select select-md shadow-xl w-full max-w-xs mx-auto block text-lg mt-4 bg-secondary-content text-black">
                    <option value="zamoyskiego">Zamoyskiego</option>
                    <option value="wyspianskiego">Wyspiańskiego</option>
                </select>
            }
            <div className="flex items-center px-2 rounded-lg justify-center mt-4">
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
                            gallery.map(pic => {
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