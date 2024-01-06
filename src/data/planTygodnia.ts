

type PlanTygodnia = {
    day: "Poniedziałek" | "Wtorek" | "Środa" | "Czwartek" | "Piątek",
    schedule: {[key: string]: string},
    accentColor: "primary" | "secondary"
}[]
export const planTygodniaMlodszaGrupa:PlanTygodnia = [
    {
        day: "Poniedziałek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy wspólne*",
            '10:00 - 10:45' : "Wyjście na plan zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "Czas na książkę**",
            '15:00 - 15:30' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Zabawy wspólne*",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },
     {
        day: "Wtorek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '10:00 - 10:45' : "Wyjście na plan zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Rytmika - zajęcia z muzyką, tańcem i instrumentem',
            '14:30 - 15:00' : "Czas na książkę**",
            '15:00 - 15:30' : "Gimnastyka dla Smyka",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Zabawy wspólne*",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "secondary"
    },
      {
        day: "Środa",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy wspólne",
            '10:10 - 10:45' : "Eksperymenty fizyczne",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Ralaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "Czas na książkę**",
            '15:00 - 15:30' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Zabawy wspólne*",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },
      {
        day: "Czwartek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '10:10 - 10:45' : "Zabawa z językiem angielskim",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Rytmika - zajęcia z muzyką, tańcem i instrumentem',
            '14:30 - 15:00' : "Czas na książkę**",
            '15:00 - 15:30' : "Gimnastyka dla Smyka",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Zabawy wspólne*",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "secondary"
    },
      {
        day: "Piątek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '10:00 - 10:45' : "Wyjście na plan zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Rytmika - zajęcia z muzyką, tańcem i instrumentem',
            '14:30 - 15:00' : "Czas na książkę**",
            '15:00 - 15:30' : "Gimnastyka dla Smyka",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Zabawy wspólne*",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },


]

export const planTygodniaStarszaGrupa:PlanTygodnia = [
    {
        day: "Poniedziałek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zajęcia prowadzone na podstawie miesięcznego planu dydaktycznego",
            '10:00 - 10:45' : "Wyjście na plac zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "gimnastyka dla smyka**",
            '15:00 - 15:30' : "Zabawy dowolne",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Praca kreatywna z wychowawcą - sztuka, tworzenie, zabawy edukacyjne",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },
     {
        day: "Wtorek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '10:00 - 10:45' : "Wyjście na plac zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Rytmika - zajęcia z muzyką, tańcem i instrumentem',
            '14:30 - 15:00' : "Gimnastyka dla smyka**",
            '15:00 - 15:30' : "Zabawy dowolne",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Praca kreatywna z wychowawcą - sztuka, tworzenie, zabawy edukacyjne",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "secondary"
    },
      {
        day: "Środa",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zajęcia prowadzone na podstawie miesięcznego planu dydaktycznego",
            '10:10 - 10:45' : "Eksperymenty fizyczne/ wyjście na plac zabaw (co drugi tydzień)",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Ralaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "Zabawy w kole",
            '15:00 - 15:30' : "Zabawy dowolne",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Praca kreatywna z wychowawcą - sztuka, tworzenie, zabawy edukacyjne",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },
      {
        day: "Czwartek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '10:10 - 10:45' : "Zabawa z językiem angielskim",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Ralaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "Gimnastyka dla Smyka",
            '15:00 - 15:30' : "Zabawy dowolne",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę**",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Praca kreatywna z wychowawcą - sztuka, tworzenie, zabawy edukacyjne",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "secondary"
    },
      {
        day: "Piątek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Wyjście na plan zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '10:00 - 10:45' : "Zajęcia prowadzone na podstawie miesięcznego planu dydaktycznego",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Ralaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Zabawy dowolne",
            '15:30 - 16:00' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '16:00 - 16:15' : "Czas na książkę",
            '16:15 - 16:30' : "Zabawy dowolne",
            '16:30 - 16:45' : "Praca kreatywna z wychowawcą - sztuka, tworzenie, zabawy edukacyjne",
            '16:45 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },


]