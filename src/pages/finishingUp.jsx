import React from "react";

// import template 
import FormLayout from "../layout/formLayout";

import fakeEncrytionPath from "../data/fakeEncrytionPath";
import { Link } from "react-router-dom";

const FinishingUpPage = ()=>{
    return (
        <FormLayout title='Finishing Up' step='4'>
              <section className="main_content_form ">
                {/* container form */}
                <section className="container_form border-2 border-red-600 flex-1 w-full h-full px-5 md:px-2">
                    {/* main form4 */}
                    <section className="main_form">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Finshing Up
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            double-check  everything looks OK before confirming. 
                        </p>

                        <section className="container_finshing_up w-full border-2 overflow-hidden rounded-md border-red-600 mt-4">
                                <div className="finishing_header w-full px-4 py-2 bg-netral-magnolia">
                                    <div className="select_select_plan_info w-full flex gap-2 items-center py-4 border-b-2 border-b-neutral-200">
                                            <h2 className="title_select_plan flex-1 w-full text-[14px] font-semibold text-primary-marine-blue">
                                                Arcade (Monthly)
                                            </h2>
                                            <h2 className="price_select_plan text-[14px] font-bold text-primary-marine-blue ">
                                            $9/mo
                                            </h2>
                                    </div>
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
                            <button className="btn_nav_form bg-primary-purplish-blue hover:opacity-60 transition-all duration-200">
                                Confirm
                            </button>
                        </div>
                    </section>
              </section>
        </FormLayout>
    )
}

export default FinishingUpPage; 