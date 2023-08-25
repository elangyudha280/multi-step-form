import React,{useEffect}from "react";

// import layout
import FormLayout from "../layout/formLayout";

// import image
import iconThankyou from '../assets/images/icon-thank-you.svg'

import { useNavigate } from "react-router-dom";

const SuccessPage = ()=>{
    let navigate = useNavigate()
    useEffect(()=>{
        // clear session
        setTimeout(() => {
            sessionStorage.removeItem('success')
            navigate('/')
        }, 1000);
    },[])
    return (
        <FormLayout title='success' step='4'>
            <section className="form_success w-full h-full relative  flex items-start  md:items-center px-4">
                <div className="container_success animate-show w-full  shadow-lg bg-white mt-[-2em] px-[2em] rounded-md py-[3em] md:bg-transparent md:mt-0 md:px-[5em] md:shadow-none">
                    <img src={iconThankyou} className="mx-auto object-center object-cover w-[60px] h-[60px]" alt="" />
                   <h2 className="thankyou-title my-2 text-[2em] text-center text-primary-marine-blue font-medium">
                    Thank you!
                    </h2> 
                    <p className="desc-thankyou text-center text-[15px] text-netral-cool-gray font-medium ">
                    Thanks for confirming your subscribtion! We hope you have fun using our platform. If you ever need support, please feel free to email us at suport@loremgaming.com
                    </p>
                </div>
            </section>
        </FormLayout>
    )
}

export default SuccessPage