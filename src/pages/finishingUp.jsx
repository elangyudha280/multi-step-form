import React,{useState,useEffect,Fragment}from "react";

// import template 
import FormLayout from "../layout/formLayout";

import fakeEncrytionPath from "../data/fakeEncrytionPath";
import { Link,useNavigate } from "react-router-dom";
import CardFinishingUp from "../component/card";

const FinishingUpPage = ()=>{

    let navigate = useNavigate()

    let [dataFinishingUp,setDataFinishingUp] = useState([])

    useEffect(()=>{

        // check data session
        if(sessionStorage.getItem('dataSession') && JSON.parse(sessionStorage.getItem('dataSession')).personalInfo && JSON.parse(sessionStorage.getItem('dataSession')).selectPlan){
            let parse = JSON.parse(sessionStorage.getItem('dataSession'))
            // set data finishing
            setDataFinishingUp([parse])
            return
        }

    },[])

    // handle finishing up
    const handleFinishing = ()=>{
        
        navigate(`/${fakeEncrytionPath.successPage}`)
        sessionStorage.setItem('success',true)
        // clear session
        sessionStorage.removeItem('dataSession')
    }

  

    return (
        <FormLayout title='Finishing Up' step='4'>
              <section className="main_content_form ">
                {/* container form */}
                <section className="container_form animate-show opacity-0 flex-1 w-full h-full px-5 md:px-2">
                    {/* main form4 */}
                    <section className="main_form">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Finshing Up
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            double-check  everything looks OK before confirming. 
                        </p>

                        <section className="container_finshing_up w-full  overflow-hidden   mt-4">
                               {/* show data user */}
                               {
                                (dataFinishingUp.length !== 0) &&  dataFinishingUp?.map((el,i) =>{
                                    return (
                                        <Fragment key={i}>
                                                 <CardFinishingUp selectPlan={el.selectPlan} pickAddOns={el.pickAddOns}/>
                                        </Fragment>
                                    )
                                })
                                
                               }
                        </section>
                    </section>

                </section>
                
                     {/* container button navigation nav */}
                     <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-between">
                            {/* go back  */}
                            <Link to={`/${fakeEncrytionPath.addons}`} className="btn_nav_form  text-netral-cool-gray text-medium transition-all duration-100 hover:text-primary-marine-blue  grid place-items-center">
                                go back 
                            </Link>
                            {/* next step */}
                            <button onClick={handleFinishing} className="btn_nav_form bg-primary-purplish-blue hover:opacity-60 transition-all duration-200">
                                Confirm
                            </button>
                        </div>
                    </section>
              </section>
        </FormLayout>
    )
}

export default FinishingUpPage; 