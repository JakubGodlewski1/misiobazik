type Employee = {
    imgSrc: string,
    description: string
}

type Employees = {
    nurseryWyspianskiego: Employee[],
    nurseryZamoyskiego: Employee[],
    kinderGartenWyspianskiego:Employee[]
}

export const employees:Employees = {
    nurseryWyspianskiego: [
        {
            description: "Nazywam się Ania Trojanowska. Ukończyłam studia ekonomiczne oraz kurs opiekunki dziecięcej. Posiadam kilkunastoletnie doświadczenie w pracy z dziećmi pracując jako opiekunka dziecięca w żłobkach, jak również, jako niania. Prywatnie jestem mamą dwójki chłopaków- 1,5 rocznego Kuby oraz 5 letniego Dawida. W wolnych chwilach lubię oglądać filmy o tematyce psychologicznej. Od zawsze jestem zakochana w morzu. Jestem osobą ciepłą, pogodną. Praca z dziećmi daje mi dużo radości, i choć często wymaga wielkiego wysiłku, to daje poczucie spełnienia i bycia potrzebnym.",
            imgSrc:"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fwyspianskiego%2FAnia.jpg?alt=media&token=2bd002b8-47f7-442e-919e-1faf2b4187f2"
        },
        {
            description: "Nazywam się Joanna Mielec. Moja praca z dziećmi nie była przypadkiem. To był pomysł na życie. Po ukończeniu szkoły zaczęłam pracować w żłobku i tak minęły 33 lata pracy z dziećmi. Daje mi ona naprawdę dużo radości i satysfakcji. Chociaż czasami bywa ciężko uśmiech dziecka wynagradza wszystko. Jestem mamą dwójki dorosłych dzieci. Interesuje się historią Zielonej Góry. Kocham zwierzęta, w domu mam 4 pieski.",
            imgSrc:"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fwyspianskiego%2FJoanna.jpg?alt=media&token=aa91b8ce-7297-455e-9d43-bc5a37f63c7b"
        },
        {
            description: "Nazywam się Patrycja Salamońska. W zawodzie opiekunki dziecięcej pracowałam w przedszkolu, jak i w żłobku W „Misio Baziku pracuję już 6 lat. Jestem mamą trójki dzieci. Uwielbiam muzykę, taniec, krzyżówki oraz sport. Ze swoimi Smerfami lubię skakać i ćwiczyć. Nie wyobrażam sobie innej pracy mimo trudniejszych dni.",
            imgSrc:"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fwyspianskiego%2FPatrycja.jpg?alt=media&token=1ffdc0bb-2b02-4fa1-a8fa-af9bcc7bd116"
        }
    ],
    nurseryZamoyskiego: [
        {
            description: "Nazywam się Ania Matla. Skończyłam studia na kierunku Pedagogika Opiekuńczo Wychowawcza i Profilaktyka w Zielonej Górze. Posiadam duże doświadczenie w pracy z dziećmi, sprawia mi ona ogromną radość i satysfakcję. Lubię aktywnie spędzać czas, podróżować. Prywatnie jestem mamą 2,5 letniej Amelki.",
            imgSrc:"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fzamoyskiego%2FAnna%20Matla.jpg?alt=media&token=9366da5d-17fe-44d9-9533-f8f9b609150e"
        },
        {
            description: "Nazywam się Justyna Grużewska. Kieruję się zasadą, że dziecko to człowiek, mający prawo do swoich emocji, gorszych i lepszych dni. Człowiek choć mały ma mnóstwo niespożytkowanej energii a zadaniem wychowawcy jest ukierunkowanie tej energii na dobre tory. Dawanie dzieciom swobody w działaniu, zabawie i nauce.",
            imgSrc:"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fzamoyskiego%2FJustyna%20Gruz%CC%87ewska%20.jpg?alt=media&token=79704484-9d1c-4d9f-854a-2d0a3ed9e195"
        },
        {
            description: "Nazywam się Svetlana Trivol. Mieszkam w Polsce od 7 lat. Ukończyłam Uniwersytet Pedagogiczny na Ukrainie.Z zawodu jestem psychologiem. Z małymi dziećmi pracuję już trzeci rok.  Daje mi ona ogromną radość, zaangażowanie i satysfakcję wiedząc, że mogę wspierać dzieci w ich pierwszych krokach na drodze do samodzielności i samorozwoju.",
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fzamoyskiego%2FSvetlana%20Trivol.jpg?alt=media&token=1a5e24b0-1738-4130-ad4e-91bc4292cce0"
        },
        {
            description: "Nazywam się Małgorzata Kalisz. Mam wyksztalcenie pedagogiczne i doświadczenie w pracy z dziećmi w różnym wieku. Lubię pracę z dziećmi, która daje mi dużo satysfakcji Jestem mamą dwóch dorosłych synów i trójki wnucząt. Jestem fanką kickboxingu i aktywnie spędzam czas wolny. Lubię muzykę filmową i filmy science fiction oraz ciekawe książki.",
            imgSrc:"https://firebasestorage.googleapis.com/v0/b/misiobazik-711f1.appspot.com/o/employees%2Fnursery%2Fzamoyskiego%2FMa%C5%82gorzataKalisz.jpg?alt=media&token=e0d92171-264d-4d3a-b4bb-a82d11136252"
        }

    ],
    kinderGartenWyspianskiego: []
}