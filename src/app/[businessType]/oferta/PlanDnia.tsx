type Props =  {
    day: "Poniedziałek" | "Wtorek" | "Środa" | "Czwartek" | "Piątek",
    schedule: {[key: string]: string},
    accentColor: "primary" | "secondary",
    className?: string
}

const PlanDnia = ({day, schedule, accentColor, className}:Props) => {

    return (
        <div className={`p-2 rounded-xl ${className}`}>
            <h3 className={`text-3xl sm:text-4xl py-2 px-7 rounded-lg self-center mb-4 sm:mb-12 bg-${accentColor}`}>{day}</h3>
            <div  style={{gridTemplateRows: "repeat(8, min-content)" }} className={`flex sm:grid gap-2 grid-flow-col flex-col`}>
                {
                    Object.keys(schedule).map(key=>(
                        <div className="relative p-0.5 flex gap-2" key={key}>
                            <span className={`min-w-[120px] flex items-center justify-center p-2 rounded bg-${accentColor}`}>{key}</span>
                            <p className="text-[15px] bg-accent p-2 rounded flex-grow  flex items-center">{schedule[key]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PlanDnia;