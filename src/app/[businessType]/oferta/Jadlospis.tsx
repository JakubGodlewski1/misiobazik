type Links = {
    "Menu śniadaniowe":string,
    "Menu obiadowe":string,
    "Menu śniadaniowe bezbiałkowe bezglutenowe":string,
    "Menu obiadowe bezbiałkowe bezglutenowe":string,
    "Menu obiadowe wegeteriańskie": string
}

const links:Links = {
    "Menu śniadaniowe":"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/files%2F02.01-31.01%20-%20MENU%20S%CC%81NIADANIOWE.pdf?alt=media&token=df36c903-3264-4f4f-8973-9f6eb05c4023",
    "Menu obiadowe":"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/files%2FMENU%20OBIADOWE%20-%2002.01-31.01.pdf?alt=media&token=6ed1ac8e-f5e7-4cb8-8f60-3c548b09711c",
    "Menu śniadaniowe bezbiałkowe bezglutenowe":"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/files%2F02.01-31.01%20-%20MENU%20SNIADANIOWE%20DIETA%20BEZBIA%C5%81KOWA%20DIETA%20BEZGLUTENOWA.pdf?alt=media&token=1baf0821-4643-43ab-be45-c9ab2077986d",
    "Menu obiadowe bezbiałkowe bezglutenowe":"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/files%2FMENU%20OBIADOWE%20%2002.01-31.01%20%20DIETA%20BEZBIA%C5%81KOWA%20DIETA%20BEZGLUTENOWA.pdf?alt=media&token=b6d6cf49-5d04-4b67-91fa-effd812b9c71",
    "Menu obiadowe wegeteriańskie":"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/files%2FMENU%20OBIADOWE%20-%2002.01-31.01%20DIETA%20WEGETARIAN%CC%81SKA.pdf?alt=media&token=23d792a5-11e6-4e48-8491-9d82e1c496e8",
}

const Jadlospis = () => {
    return (
        <section className="mb-8">
            <div className="max-w-screen-2xl mx-auto">
                <h1>Jadłospis</h1>
                <div className="flex flex-col items-center max-w-[600px] mx-auto gap-3">
                    {
                        Object.keys(links).map((menu, i) => {
                            return (
                                <div key={menu}>
                                    {i === 2 && <h2 style={{marginBottom: 0, marginTop: 12}}>Dieta</h2>}
                                    {menu === "Catering" &&
                                        <h2 style={{marginBottom: 0, marginTop: 24}}
                                            className="subheading">Catering</h2>}
                                    <a
                                        key={menu}
                                        target="_blank"
                                        className="text-[#000] btn btn-secondary md:btn-lg rounded-full px-8 text-center"
                                        // @ts-ignore
                                        href={links[menu]}
                                        download={menu}
                                    >
                                        {menu}
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