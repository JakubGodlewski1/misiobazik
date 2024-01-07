import Cart from "@/app/[businessType]/strefa-rodzica/Cart";

const StrefaRodzicaPage = ({params:{businessType}}:{params:{businessType: "zlobek" | "przedszkole"}}) => {
    return (
        <div className="text-center [&>section:nth-child(even)]:bg-accent">
            <section  className="py-12 px-6">
                <div className="max-w-screen-2xl mx-auto">
                    <h2>Cennik</h2>
                    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
                        <Cart title="Czesne">
                            {
                                businessType === "zlobek" ?
                                    <p><b>Czesne wynosi 700 zł miesięcznie</b> bez względu na ilość godzin zaraz po
                                        złożeniu przez rodzica wniosku do ZUS o 400 zł (zgodnie z Ustawą o rodzinnym
                                        kapitale opiekuńczym - Dz. U. z 2021 r., poz. 2270). </p> :
                                    <p>Czesne wynosi 800zł miesięcznie bez względu na ilość godzin.</p>
                            }
                        </Cart>
                        <Cart title="Całodzienne wyżywienie dziecka">
                            <p><b>16 zł</b> - I śniadanie, II śniadanie, zupa, II danie, podwieczorek, napoje gorące i
                                zimne (herbata ziołowa, owocowa, woda, kompot).</p>
                        </Cart>
                        <Cart title="Wpisowe">
                            <p><b>400,00 zł opłata jednorazowa, bezzwrotna,</b> pobierana przy podpisywaniu umowy
                                rodzica i dyrektora. Jest to opłata zapewniająca miejsce w placówce.</p>
                        </Cart>
                        <Cart title="Opieka doraźna">
                            <p><b>Już od dwóch godzin dziennie – 50,00zł za każdą rozpoczętą godzinę.</b> Opieka w
                                sobotę lub niedzielę –<b>60 zł za godzinę.</b></p>
                        </Cart>
                    </div>
                </div>
            </section>
            <section  className="py-12 px-6">
                <div className="max-w-[600px] w-full mx-auto">
                    <h2>Ważne informacje</h2>
                    {
                        businessType === "przedszkole" && <p>
                            Rekrutacja do Anglojęzycznego Niepublicznego Punktu Przedszkolnego „Teddy Bazik” trwa przez cały
                            rok
                            do wyczerpania miejsc. Przedszkole przyjmuje dzieci od 2 do 5 lat, które samodzielnie
                            sygnalizują
                            potrzeby fizjologiczne i nie korzystają z pieluszki.
                        </p>
                    }
                    <span className="font-bold text-lg block mt-12 mb-2">Przy zapisie dziecka należy dostarczyć następujące dokumenty:</span>
                    <ul className="text-start list-disc ml-6">
                        <li>umowę zaakceptowaną czytelnym podpisem rodzica/prawnego opiekuna,</li>
                        <li>wypełnioną kartę zgłoszenia dziecka,</li>
                        <li>opłatę wpisową,</li>
                        <li>zaświadczenie od lekarza pediatry, że nie ma przeciwskazań, aby dziecko chodziło do
                            żłobka.
                        </li>
                    </ul>
                    <span className="font-bold text-lg block mt-12 mb-2">Prosimy o zapewnienie dziecku podczas pobytu w placówce:</span>
                    <ul className="text-start list-disc ml-6">
                        <li>ubrań na zmianę,</li>
                        <li>papci lub skarpetek antypoślizgowych,</li>
                        <li>piżamki,</li>
                        <li>kubeczka, szczoteczki do zębów, pasty,</li>
                        <li>pieluszki jednorazowe,</li>
                        <li>nawilżających chusteczek.</li>
                    </ul>
                </div>
            </section>
            {
                businessType === "zlobek" &&
                <section  className="py-12 px-6">
                    <h2>Dotacje</h2>
                    <div className="max-w-[400px] mx-auto">
                        <Cart>
                            <p><b>W roku 2023</b>, jak i również w latach poprzednich, otrzymaliśmy dofinansowanie z
                                Urzędu Miasta Zielona Góra w kwocie 270zł na dziecko.</p>
                        </Cart>
                    </div>
                </section>
            }
            <section className="py-12 px-6">
                <h2>Dokumenty</h2>
                <Cart>
                    <a
                        target="_blank"
                        className="text-2xl p-4 pt-0 hover:underline"
                        href="https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/files%2FRodo.pdf?alt=media&token=e031f921-b46e-4cf4-a0ad-d3dcb0bcdad1"
                        download="Rodo"
                        title="download Rodo PDF"
                    >
                        Rodo
                    </a>
                </Cart>
            </section>
        </div>
    );
};

export default StrefaRodzicaPage;

export async function generateStaticParams(){
    return [
        {businessType: "zlobek"},
        {businessType: "przedszkole"}
    ]
}