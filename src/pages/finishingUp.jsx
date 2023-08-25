import React,{useState,useEffect}from "react";

// import template 
import FormLayout from "../layout/formLayout";

import fakeEncrytionPath from "../data/fakeEncrytionPath";
import { Link,useNavigate } from "react-router-dom";

const FinishingUpPage = ()=>{

    let navigate = useNavigate()

    // handle finishing up
    const handleFinishing = ()=>{
        navigate(`/${fakeEncrytionPath.successPage}`)
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
                                <div className="finishing_header w-full px-4 py-2 bg-netral-magnolia rounded-md">
                                    {/* select plan */}
                                    <div className="select_select_plan_info w-full flex gap-2 items-center py-4 border-b-2 border-b-neutral-200">
                                            <h2 className="title_select_plan flex-1 w-full text-[14px] font-semibold text-primary-marine-blue">
                                                Arcade (Monthly)
                                            </h2>
                                            <h2 className="price_select_plan text-[14px] font-bold text-primary-marine-blue ">
                                            $9/mo
                                            </h2>
                                    </div>
                                    {/* add ons  */}
                                    <div className="add_ons_info mt-1  overflow-x-hidden overflow-y-auto w-full flex flex-col ">
                                        <div className="py-2 w-full flex items-center">
                                            <h2 className="title_add_ons flex-1 w-full text-[13px] font-medium text-netral-cool-gray">
                                                online service
                                            </h2>
                                            <h2 className="price_add_ons text-[13px] font-bold text-primary-marine-blue ">
                                            $9/mo
                                            </h2>
                                        </div>
                                         <div className="py-2 w-full flex items-center">
                                            <h2 className="title_add_ons flex-1 w-full text-[13px] font-medium text-netral-cool-gray">
                                                larger storage
                                            </h2>
                                            <h2 className="price_add_ons text-[13px] font-bold text-primary-marine-blue ">
                                            $9/mo
                                            </h2>
                                        </div>
                                        <div className="py-2 w-full flex items-center">
                                            <h2 className="title_add_ons flex-1 w-full text-[13px] font-medium text-netral-cool-gray">
                                                larger storage
                                            </h2>
                                            <h2 className="price_add_ons text-[13px] font-bold text-primary-marine-blue ">
                                            $9/mo
                                            </h2>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div className="finishin_body w-full flex items-center px-4 py-3 ">
                                    <h2 className="title_total_price flex-1 w-full text-[16px] font-medium text-netral-cool-gray">
                                        Total
                                    </h2>
                                    <h2 className="total_price text-[20px] truncate font-bold text-primary-purplish-blue">
                                        +$12 
                                    </h2>
                                </div>
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