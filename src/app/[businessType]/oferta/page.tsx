import PlanDniaCarousel from "@/app/[businessType]/oferta/PlanDniaCarousel";
import {contentfulClient} from "@/clients/contentful";
import Zajecia from "@/app/[businessType]/oferta/Zajecia";

const OfertaPage = async ({params:{businessType}}:{params:{businessType:"zlobek" | "przedszkole"}}) => {

    //fetch classes and covert them to readable format
     const classes = await contentfulClient.getEntries({content_type: businessType === "zlobek" ? "zlobekOferta":"przedszkoleOferta"})
        const convertedClasses = classes.items.map(item=>{
        return {title: item.fields.title, text: item.fields.text}
    }) as {title:string, text:string}[]

    return (
        <div className="flex flex-col gap-6">
            <Zajecia convertedClasses={convertedClasses}/>
            <PlanDniaCarousel/>
        </div>
    );
};

export default OfertaPage;