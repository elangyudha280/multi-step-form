import React from "react";

// import layout
import FormLayout from "../layout/formLayout";
import fakeEncrytionPath from "../data/fakeEncrytionPath";

import { Link } from "react-router-dom";

const AddOnsPage = ()=>{
    return (
        <FormLayout title='addons' step='3'>
            <section className="main_content_form border-2 border-red-600">
                {/* container form */}
                <section className="container_form flex-1 w-full h-full px-5 md:px-2">

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


