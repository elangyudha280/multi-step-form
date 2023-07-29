import React from "react";
import FormLayout from "../layout/formLayout";



const PagePersonalInfo = ()=>{
    return (
        <FormLayout title='Personal Info'>
            {/* content personal info */}
            <form action="" autoComplete="off" className="w-full h-full relative">
                <section className="main_content_form">
                    {/* container form */}
                    <section className="container_form  flex-1 w-full h-full px-5 md:px-2">
                        {/* current form */}
                        <div className="main_form">
                                <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                                    Personal info
                                </h2>
                                <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                                    Please provide your name,email address, phone number. 
                                </p>

                                {/* input group container  */}
                                <div className="container-input relative w-full  py-2 mt-4">
                                    {/* username */}
                                        <div className="input-group">
                                            <label htmlFor="username" className="label-input">Name</label>
                                            <input type="text" required placeholder="e.g Stepen King" id="username" className="input-item border-netral-light-gray " />
                                        </div>
                                    {/* email */}
                                    <div className="input-group mt-4">
                                            <label htmlFor="email" className="label-input">Email address</label>
                                            <input type="email" required placeholder="e.g Stepenking@lorem.com" id="email" className="input-item border-netral-light-gray " />
                                    </div>

                                    {/* phone number */}
                                    <div className="input-group mt-4">
                                            <label htmlFor="phoneNumber" className="label-input">Phone Number</label>
                                            <input type="tel" required placeholder="e.g +1 234 567 890" id="phoneNumber" className="input-item border-netral-light-gray " />
                                        </div>
                                </div>
                        </div>
                    </section>

                    {/* container button navigation nav */}
                    <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-end">
                            <button className="btn_nav_form">
                                Next Step
                            </button>
                        </div>
                    </section>
                </section>
            </form>
        </FormLayout>
    )
}
export default  PagePersonalInfo;