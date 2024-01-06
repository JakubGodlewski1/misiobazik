export type Post = {
    imgSrc: string,
    text: string,
    title: string,
    business: "wyspianskiego" | "zamoyskiego" | "przedszkole"
}

export const posts:Post[] = [
    {
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/newsThumbnails%2Fdziewczynka-z-flaga-brytyjska.jpg?alt=media&token=2d1785db-f527-4217-911d-79114e2fb948",
        text: `Nasze przedszkole pracuje w oparciu o Ogólnopolski Program „Dwujęzyczny Przedszkolak”. Pracujemy metodą wczesnej immersji, czyli zanurzenia się w języku angielskim. Grupą opiekuje się dwóch nauczycieli, polsko i anglojęzyczny. Dzieci przez cały dzień mają nieustanny kontakt zarówno z językiem polskim, jak i angielskim. 
Dzięki takiemu rozwiązaniu osłuchują się z językiem obcym, nabywają i utrwalają nowe słownictwo, ale przede wszystkim uczą się czynnie używać języka w rzeczywistych kontekstach. Konieczność komunikowania się z nauczycielem, który nie mówi w języku ojczystym dzieci, sprawia, iż w bardzo szybkim tempie przełamują one barierę językową i zaczynają swobodnie porozumiewać się w języku angielskim. 

Program „Dwujęzyczny Przedszkolak” daje nam możliwość wykorzystania różnorodnych pomocy edukacyjnych, mat do zabawy, anglojęzycznych książeczek, plakatów tematycznych, materiałów audio/video, które zachęcają dzieci do komunikowania się w języku obcym. Stosujemy dużą ilość powtórek, tak, aby każde dziecko zapamiętało wprowadzony materiał.

Maluch zaczynając przygodę z przedszkolem, powinien mieć jednak poczucie, że pomimo codziennego kontaktu z językiem obcym **ma zawsze możliwość wysłuchania nauczyciela w języku polskim.** Niezwykle istotne jest to, że wszystkie treści programowe są zgodne z Podstawą Programową Wychowania Przedszkolnego.`,
        title:"Kilka słów o „Teddy Bazik”",
        business: "przedszkole"
    }
]