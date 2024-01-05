import {employees} from "@/data/employees";
import EmployeeCart from "@/app/[businessType]/kadra/EmployeeCart";

const EmployeesContainer = ({businessType}:{businessType: "zlobek" | "przedszkole"}) => {

    return (
        <div className="flex flex-col gap-16 mt-16">

            {/*ZAMOYSIEGO NURSERY*/}
            {
                businessType === "zlobek" && <>
                    {
                        employees.nurseryZamoyskiego.length > 0 && <h2 style={{marginBottom:"-40px"}}>Zamoyskiego</h2>
                    }
                    {
                        employees.nurseryZamoyskiego.map((employee, i)=>{
                            return <EmployeeCart imgSrc={employee.imgSrc} key={employee.imgSrc} reverse={i%2!==0} description={employee.description}/>
                        })
                    }
             {/*WYSPIAŃSKIEGO NURSERY*/}
                    {
                        employees.nurseryWyspianskiego.length > 0 &&  <h2 style={{marginBottom:"-40px"}}  className="subheading">Wyspiańskiego</h2>
                    }
                    {
                        employees.nurseryWyspianskiego.map((employee, i)=>{
                            return <EmployeeCart imgSrc={employee.imgSrc} key={employee.imgSrc} reverse={i%2!==0} description={employee.description}/>
                        })
                    }

                </>
            }



            {/*WYSPIAŃŚKIEGO KINDERGARTEN*/}

            {
                businessType === "przedszkole" && <>
                    {
                        employees.kinderGartenWyspianskiego.length > 0 &&  <h2 style={{marginBottom:"-40px"}}>Wyspiańskiego</h2>
                    }
                    {
                        employees.kinderGartenWyspianskiego.map((employee, i)=>{
                            return <EmployeeCart imgSrc={employee.imgSrc} key={employee.imgSrc} reverse={i%2!==0} description={employee.description}/>
                        })
                    }
                </>
            }
        </div>
    );
};

export default EmployeesContainer;