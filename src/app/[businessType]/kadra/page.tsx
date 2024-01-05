import KadraDescription from "@/app/[businessType]/kadra/KadraDescription";
import EmployeesContainer from "@/app/[businessType]/kadra/EmployeesContainer";

const KadraPage = ({params:{businessType}}:{params:{businessType: "zlobek" | "przedszkole"}}) => {
    return (
        <>
            <section className="bg-secondary-content pt-12">
                <h1 className="heading">Nasza kadra</h1>
                <div className="pb-8">
                    <KadraDescription businessType={businessType}/>
                </div>
            </section>
            <section className="px-12">
                <EmployeesContainer businessType={businessType}/>
            </section>
        </>
    );
};

export default KadraPage;