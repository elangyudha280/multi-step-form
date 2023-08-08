import React from "react";

// import layout
import FormLayout from "../layout/formLayout";
import fakeEncrytionPath from "../data/fakeEncrytionPath";

import { Link } from "react-router-dom";

const AddOnsPage = ()=>{
    return (
        <FormLayout title='addons' step='3'>
            <section className="main_content_form ">
                {/* container form */}
                <section className="container_form form_add_ons flex-1 w-full h-full px-5 md:px-2">

                    <section className="main_form main_form_add_ons">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Pick add-ons
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            add-ons help enhance your gaming experience. 
                        </p>

                        <div className="container-add-ons w-full flex flex-col mt-4 gap-3">
                            <div className="card_add_ons shadow-netral-cool-gray">
                                <div className="checkbox  pr-3 flex items-center justify-center">
                                    <input type="checkbox" name="" id="" className="w-[17px] h-[17px]  accent-primary-purplish-blue " />
                                </div>
                                <div className="title_card flex-1 w-full">
                                        <h2 className="title_card_ons text-primary-marine-blue text-[16px] font-semibold">Online service</h2>
                                        <p className="desc_card_on text-[13px] text-netral-cool-gray font-medium p-0 m-0 mt-[-3px]">
                                            Access to multiplayer games
                                        </p>
                                </div>
                                <div className="price w-[40px] flex items-center justify-center">
                                    <p className="text-[13px] text-primary-marine-blue">+1/mo</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>

                {/* component nav */}
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
        </FormLayout>
    )
}

export default AddOnsPage;


