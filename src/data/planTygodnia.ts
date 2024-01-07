

type PlanTygodnia = {
    day: "Poniedziałek" | "Wtorek" | "Środa" | "Czwartek" | "Piątek",
    schedule: {[key: string]: string},
    accentColor: "primary" | "secondary"
}[]
export const planTygodniaMlodszaGrupaZamoyskiego:PlanTygodnia = [
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
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Czas na książkę, budowanie z klocków, zabawy z chustą animacyjną",

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
            '11:30 - 11:50' : "Rytmika (Wyspiańskiego)",
            '12:00 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Rytmika - zajęcia z muzyką, tańcem i instrumentem',
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Budowanie z klocków, śpiewanie, dźwiękonaśladownictwo",

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
            '9:30 - 9:45' :  "Język angielski",
            '9:45 - 10:45' : "Zabawy dowolne",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:00' : "Drzemka przy muzyce relaksacyjnej",
            '13:00 - 13:30' : "drugie danie",
            '13:30 - 13:50' : "Rytmika",
            '14:10 - 14:30': 'Ralaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 16:00' : "Czas na książkę",
            '16:00 - 17:00' : "Zabawy dowolne",
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
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Zabawy dowolne, śpiewanie",
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
            '10:00 - 10:30' : "Zajęcia sensoplastyczne",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Rytmika - zajęcia z muzyką, tańcem i instrumentem',
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Czas na bajkę, śpiew i zabawy dowolne",

        },
        accentColor: "primary"
    },


]
export const planTygodniaMlodszaGrupaWyspianskiego:PlanTygodnia = [
    {
        day: "Poniedziałek",
        schedule: {
            '6:30 - 8:00': 'Oczekiwanie na dzieci, "przytulanki" śpiochów, zabawy dowolne',
            '8:00 - 8:30': 'Czas z piosenką "Przywitajmy się wesoło!"',
            '8:30 - 9:00' : 'Śniadanie',
            '9:00 - 9:15' : "Poranna toaleta - mycie zębów, oswajanie z nocnikiem",
            '9:15 - 9:45' : "Zabawy wspólne",
            '10:00 - 10:45' : "Wyjście na plan zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Czas na książkę, budowanie z klocków, zabawy z chustą animacyjną",
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
            '11:30 - 11:50' : "Rytmika",
            '12:00 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 15:00':  "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Zabawy dowolne, układnie klocków, zabawy z chustą animacyjną",
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
            '9:30 - 10:00' : "Zajęcia sensoplastyczne",
            '10:00 - 10:15' : "Czas na bajkę",
            '10:15 - 11:00' : "Zabawy dowolne",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, drugie danie",
            '14:00 - 14:10': 'Ralaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:10 - 15:00' : "Zabawy w sali ruchu w basenie z piłeczkami, na materacach rehabilitacyjnych",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Czas na bajkę, zabawy wspólne",
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
            '9:30 - 9:45' : "Zabawa z językiem angielskim",
            '9:45 - 10:45' : "Wyjście na spacer lub plac zabaw",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Drugie danie",
            '14:00 - 14:15':   'Relaksacja',
            '14:15 - 14:30':   'Czas na bajkę',
            '14:30 - 15:00' : "Podwieczorek",
            '15:00 - 17:00' : "Zabawy dowolne, układanie klocków, śpiewanie, dźwiękonaśladewnictwo, zajęcia z kartami pracy",
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
            '13:30 - 14:00' : "Drugie danie",
            '14:10 - 14:30': "Czas na książkę",
            '14:30 - 15:00' : "Zabawy dowolne",
            '15:00 - 15:30' : "Podwieczorek",
            '15:30 - 17:00' : "Zabawy dowolne"
        },
        accentColor: "primary"
    },


]
export const planTygodniaStarszaGrupaZamoyskiego:PlanTygodnia = [
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
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Układanie drewnianych puzzli, zabawa z modeliną, czytanie",
            '16:15 - 17:00' : "Zabawy dowolne",
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
            '10:00 - 10:45' : "Zajęcia na podstawie planu dydaktycznego",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Praca kreatywna z wychowawcą",
            '16:15 - 17:00' : "Zabawy dowolne",
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
            '9:15 - 9:45' : "Zabawy dowolne",
            '9:45 - 10:00' : "Język angielski",
            '10:10 - 10:45' : "Wyjście na plac zabaw",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 12:30' : "Drzemka przy muzyce relaksacyjnej",
            '12:45 - 13:30' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '13:50 - 14:10' : "Rytmika",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Układanie drewnianych puzzli, zabawa z modeliną, czytanie",
            '16:15 - 17:00' : "Zabawy dowolne",
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
            '9:30 - 10:30' : "Wyjście na spacer",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Układanie drewnianych puzzli, zabawa z modeliną, czytanie",
            '16:15 - 17:00' : "Zabawy dowolne",
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
            '9:30 - 10:00' : "Zajęcia sensoplastyczne",
            '10:15 - 10:45' : "Eksperymenty fizyczne",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Układanie drewnianych puzzli, zabawa z modeliną, czytanie",
            '16:15 - 17:00' : "Zabawy dowolne",
        },
        accentColor: "primary"
    },


]
export const planTygodniaStarszaGrupaWyspianskiego:PlanTygodnia = [
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
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 15:45' : "Czas na książkę",
            '15:45 - 17:00' : "Układanie drewnianych puzzli, zabawa z modeliną",
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
            '9:45 - 10:45' : "Wyjście na plac zabaw lub spacer na deptak, do Parku Tysiąclecia",
            '11:00 - 11:30' : "Pierwsze danie - zupa",
            '11:50 - 12:10' : "Rytmika",
            '12:10 - 13:30' : "Drzemka",
            '13:30 - 14:00' : "Drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Układanie drewnianych puzzli, zabawa z modeliną, czytanie",
            '16:15 - 17:00' : "Zabawy dowolne",
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
            '9:15 - 9:45' : "Zabawy dowolne",
            '10:00 - 10:30' : "Zajęcia sensoplastyczne",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Układanie drewnianych puzzli, zabawa z modeliną, czytanie",
            '16:15 - 17:00' : "Zabawy dowolne",
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
            '9:45 - 10:00' : "Zabawa z językiem angielskim",
            '10:00 - 10:45' : "Zajęcia w kącikach tematycznych",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",

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
            '9:30 - 10:00' : "Eksperymenty fizyczne",
            '10:00 - 10:45' : "Wyjście na plac zabaw lub spacer",
            '11:00 - 11:20' : "Pierwsze danie - zupa",
            '11:30 - 13:30' : "Drzemka przy muzyce relaksacyjnej",
            '13:30 - 14:00' : "Pobudka, przygotowanie do drugiego dania (pomoc dyżurnych dzieci), drugie danie",
            '14:10 - 14:30': 'Relaksacja po obiedzie przy muzyce relaksacyjnej',
            '14:30 - 14:45' : "gimnastyka dla smyka",
            '15:00 - 15:30' : "Podwieczorek, wspólne sprzątanie przy pomocy dyżurnych dzieci",
            '15:30 - 16:00' : "Praca kreatywna z wychowawcą",
            '16:15 - 17:00' : "Zabawy dowolne",
        },
        accentColor: "primary"
    },


]