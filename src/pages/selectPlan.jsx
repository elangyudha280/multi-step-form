import React from "react";

// import layout
import FormLayout from "../layout/formLayout";

// import icon
import iconArcade from '../assets/images/icon-arcade.svg'

const SelectPlan = ()=>{
    return (
        <FormLayout title='Select Your Plan' step='2'>

            <section className="main_content_form"> 

                {/* container form */}
                <section className="container_form  flex-1 w-full h-full px-5 md:px-2 border-2 border-red-600">
                    <div className="main_form">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Select your plan
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            You have the option of monthly or yearly billing. 
                        </p>

                        {/* choose the plan */}
                            <div className="container_plan flex flex-col  gap-3 mt-4 md:flex-row">
                                <div className="card_plan w-full flex-1 rounded-md py-1 px-3   flex flex-row md:flex-col border-[1px] border-primary-marine-blue md:py-2">
                                    <div className="card_header w-auto pr-4  h-auto   py-2 md:px-0 md:w-full md:h-[80px]">
                                           <img src={iconArcade} className="object-center object-cover" alt="" />
                                    </div>
                                    <div className="card_body flex-1 w-full">
                                        <h2 className="title text-[15px] text-primary-marine-blue capitalize font-semibold" >Arcade</h2>
                                        <p className="desc-price mt-[-4px] text-[13px] text-netral-cool-gray font-medium">$9/mo</p>
                                        <p className="status text-[12px] mt-[-1px] text-primary-marine-blue md:mt-[3px] font-[500]">2 month free</p>
                                    </div>
                                </div>
                                <div className="card_plan w-full flex-1 rounded-md py-1 px-3   flex flex-row md:flex-col border-[1px] border-primary-marine-blue md:py-2">
                                    <div className="card_header w-auto pr-4  h-auto   py-2 md:px-0 md:w-full md:h-[80px]">
                                           <img src={iconArcade} className="object-center object-cover" alt="" />
                                    </div>
                                    <div className="card_body flex-1 w-full">
                                        <h2 className="title text-[15px] text-primary-marine-blue capitalize font-semibold" >Arcade</h2>
                                        <p className="desc-price mt-[-4px] text-[13px] text-netral-cool-gray font-medium">$9/mo</p>
                                        <p className="status text-[12px] mt-[-1px] text-primary-marine-blue md:mt-[3px] font-[500]">2 month free</p>
                                    </div>
                                </div>
                                <div className="card_plan w-full flex-1 rounded-md py-1 px-3   flex flex-row md:flex-col border-[1px] border-primary-marine-blue md:py-2">
                                    <div className="card_header w-auto pr-4  h-auto   py-2 md:px-0 md:w-full md:h-[80px]">
                                           <img src={iconArcade} className="object-center object-cover" alt="" />
                                    </div>
                                    <div className="card_body flex-1 w-full">
                                        <h2 className="title text-[15px] text-primary-marine-blue capitalize font-semibold" >Arcade</h2>
                                        <p className="desc-price mt-[-4px] text-[13px] text-netral-cool-gray font-medium">$9/mo</p>
                                        <p className="status text-[12px] mt-[-1px] text-primary-marine-blue md:mt-[3px] font-[500]">2 month free</p>
                                    </div>
                                </div>
                               
                            </div>

                    </div>
                </section>

                  {/* container button navigation nav */}
                  <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-between">
                            {/* go back  */}
                            <button className="btn_nav_form  text-netral-cool-gray text-medium transition-all duration-100 hover:text-primary-marine-blue">
                                go back 
                            </button>
                            {/* next step */}
                            <button className="btn_nav_form bg-primary-marine-blue">
                                Next Step
                            </button>
                        </div>
                    </section>

            </section>

        </FormLayout>
    )
}

export default SelectPlan;