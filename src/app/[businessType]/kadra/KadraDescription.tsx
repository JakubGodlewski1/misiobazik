const KadraDescription = ({businessType}:{businessType: "zlobek" | "przedszkole"}) => {

  return businessType === "zlobek" ?
      /*NURSERY*/
      (
          <p className="text-center mx-auto max-w-3xl text-xl p-4">Kadra w naszym żłobku to panie z wykształceniem kierunkowym, pedagogicznym, zgodnym z przepisami Ustawy z 04.02.2011r o opiece nad dziećmi do lat 3.
              <br/>
              <br/>
              Wszystkie panie posiadają bardzo duże doświadczenie w pracy z małymi dziećmi, ich oddanie, wielka troska, zaangażowanie, olbrzymia cierpliwość i empatia, sprawiają, że, dla wszystkich maluchów, każdy dzień spędzony w żłobku „Misio Bazik” jest radosny i wypełniony nowymi doświadczeniami.
          </p>
      )
          :
      /*KINDERKARTEN*/
      (
          <p className="text-center mx-auto max-w-3xl text-xl p-4">Kadra w naszym przedszkolu to panie z wykształceniem kierunkowym, pedagogicznym, zgodnym z przepisami Ustawy z 04.02.2011r o opiece nad dziećmi do lat 6.
              <br/>
              <br/>
              Wszystkie panie posiadają bardzo duże doświadczenie w pracy z małymi dziećmi, ich oddanie, wielka troska, zaangażowanie, olbrzymia cierpliwość i empatia, sprawiają, że, dla wszystkich maluchów, każdy dzień spędzony w przedszkolu „Teddy Bazik” jest radosny i wypełniony nowymi doświadczeniami.
          </p>
      )


};

export default KadraDescription;