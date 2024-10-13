import EmployeeCart from "@/app/[businessType]/kadra/EmployeeCart";
import {contentfulClient} from "@/clients/contentful";
import * as util from "node:util";

const EmployeesContainer = async ({businessType}:{businessType: "zlobek" | "przedszkole"}) => {
    const kinderGartenEmployees:{url:string, description: string}[] = []
    const nurseryEmployees:{wyspianskiego: {url:string, description: string}[], zamoyskiego: {url:string, description: string}[]} = {
        wyspianskiego:[],
        zamoyskiego:[]
    }

    //fetch proper employees and convert the data
    if (businessType==="przedszkole"){
       const employees = await contentfulClient.getEntries({content_type:"przedszkoleKadra"})
       employees.items.forEach(employee=>{
           // @ts-ignore
           kinderGartenEmployees.push({description: employee.fields.description, url: "https:"+employee.fields.photo.fields.file.url})
       })
    }

    else if (businessType === "zlobek") {
        //add employees from zamoyskiego
        const wyspianskiegoEmployees = await contentfulClient.getEntries({content_type:"zlobekWyspianskiegoKadra"})
        wyspianskiegoEmployees.items.forEach(employee=>{
            // @ts-ignore
            nurseryEmployees.wyspianskiego.push({description: employee.fields.description, url: "https:"+employee.fields.photo.fields.file.url})
        })

        //add employees from zamoyskiego
        const zamoyskiegoEmployees = await contentfulClient.getEntries({content_type:"zlobekZamoyskiegoKadra"})
        zamoyskiegoEmployees.items.forEach(employee=>{
            console.log(util.inspect(employee, {depth:4}))
      // @ts-ignore
            const picUrl = employee.fields.photo?.fields?.file?.url
            if (picUrl){
            nurseryEmployees.zamoyskiego.push({description: employee.fields.description as string, url: "https:"+picUrl})
      }
        })
    }

    return (
        <div className="flex flex-col gap-16 mt-16 mx-auto md:[&>div:nth-child(odd)>p]:order-first">
            {
                [...nurseryEmployees.zamoyskiego,  ...nurseryEmployees.wyspianskiego].map((employee, i)=>{
                    return <EmployeeCart imgSrc={employee.url} key={employee.url} description={employee.description}/>
                })
            }
        </div>
    );
};

export default EmployeesContainer;

