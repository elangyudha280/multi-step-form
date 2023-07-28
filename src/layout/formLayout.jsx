import React,{useEffect} from "react";

// import component
import SidebarForm from '../component/navbar'

const FormLayout = ({children,title}) =>{

    useEffect(()=>{
        document.title = title
    },[])

    return (
        <main className="main_content">
            <section className="container-form">

                {/* sidebar */}
                 <SidebarForm/>

                {/* content component */}
                {children}
            </section>
        </main>
    )
}

export default FormLayout;