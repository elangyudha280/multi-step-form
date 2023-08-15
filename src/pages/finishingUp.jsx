import React from "react";

// import template 
import FormLayout from "../layout/formLayout";

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
                    </section>

                     {/* container button navigation nav */}
                    <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-between">
                            {/* go back  */}
                            <Link to={`/${fakeEncrytionPath.selectPlan}`} className="btn_nav_form  text-netral-cool-gray text-medium transition-all duration-100 hover:text-primary-marine-blue  grid place-items-center">
                                go back 
                            </Link>
                            {/* next step */}
                            <button className="btn_nav_form bg-primary-marine-blue">
                                Next Step
                            </button>
                        </div>
                    </section>
                </section>
              </section>
        </FormLayout>
    )
}

export default FinishingUpPage; 