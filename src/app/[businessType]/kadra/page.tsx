import KadraDescription from "@/app/[businessType]/kadra/KadraDescription";
import EmployeesContainer from "@/app/[businessType]/kadra/EmployeesContainer";

const KadraPage = async ({params:{businessType}}:{params:{businessType: "zlobek" | "przedszkole"}}) => {

    return (
        <>
            <section className="bg-secondary-content pt-12">
                <h1 className="heading">Nasza kadra</h1>
                <div className="pb-8">
                    <KadraDescription businessType={businessType}/>
                </div>
            </section>
            <section className="sm:px-12 p-2 pb-16">
                <EmployeesContainer businessType={businessType}/>
            </section>
        </>
    );
};

export default KadraPage;

export async function generateStaticParams(){
    return [
        {businessType: "zlobek"},
        {businessType: "przedszkole"}
    ]
}