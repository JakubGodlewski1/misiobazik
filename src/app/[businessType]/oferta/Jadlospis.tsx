import {contentfulClient} from "@/clients/contentful";

type Links = {
    "Menu śniadaniowe":string,
    "Menu obiadowe":string,
    "Menu śniadaniowe bezbiałkowe bezglutenowe":string,
    "Menu obiadowe bezbiałkowe bezglutenowe":string,
    "Menu obiadowe wegeteriańskie": string
}



const Jadlospis = async () => {
    const jadlospis = await contentfulClient.getEntries({content_type: "jadlospis"})

    //convert fetched jadlospis to more readable format
    const convertedJadlospis =  Object.keys(jadlospis.items[0].fields).map((key:string )=>{
        // @ts-ignore
        const {title, file:{url}} = jadlospis.items[0].fields[key].fields
        return {label: title, url: "https:"+ url}})

    return (
        <section className="mb-8">
            <div className="max-w-screen-2xl mx-auto">
                <h1>Jadłospis</h1>
                <div className="flex flex-col items-center max-w-[600px] mx-auto gap-3">
                    {
                       convertedJadlospis.map((menu, i)=> {
                            return (
                                <div key={menu.label}>
                                    {i === 2 && <h2 style={{marginBottom: 0, marginTop: 12}}>Dieta</h2>}
                                    <a
                                        key={menu.label}
                                        target="_blank"
                                        className="text-[#000] btn btn-secondary md:btn-lg rounded-full px-8 text-center"
                                        href={menu.url}
                                        download={menu}
                                    >
                                        {menu.label.split(" ").slice(0,-1).join(" ")}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Jadlospis;