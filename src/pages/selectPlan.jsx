import React,{useState}from "react";

// import layout
import FormLayout from "../layout/formLayout";

// import option selec plan
import optionSelectPlan from "../data/optionSelectplan";

import { Link,useNavigate } from "react-router-dom";
import fakeEncrytionPath from "../data/fakeEncrytionPath";

const SelectPlan = ()=>{

    let navigate = useNavigate()

    // state card plan active
    let [planActive,setPlanActive] = useState(1)

    // state moth and yearly
    let [priceYearly,setPriceYearly] = useState(false)

    // event handle select plan
    const handleSelectPlan = (el,event)=>{
        setPlanActive(el.id)
    }


    return (
        <FormLayout title='Select Your Plan' step='2'>

            <section className="main_content_form"> 

                {/* container form */}
                <section className="container_form form-select-plan  flex-1 w-full h-full px-5 md:px-2">
                    <section className="main_form main_form_select_plan">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Select your plan
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            You have the option of monthly or yearly billing. 
                        </p>

                        {/* choose the plan */}
                            <div className="container_plan flex flex-col  gap-3 mt-4 md:flex-row">
                                {
                                    optionSelectPlan.map(el=>{
                                        return (
                                            <div key={el.id} onClick={()=>{
                                                handleSelectPlan(el)
                                            }} className={`card_plan cursor-pointer 
                                                ${(planActive === el.id) ? 'shadow-primary-marine-blue bg-netral-magnolia ' : 'shadow-netral-light-gray bg-white'}
                                            `}>
                                                <div className="card_header w-auto pr-4  h-auto   py-2 md:px-0 md:w-full md:h-[80px]">
                                                    <img src={el.icon} className="object-center object-cover" alt="" />
                                                </div>
                                                <div className="card_body flex-1 w-full">
                                                    <h2 className="title text-[15px] text-primary-marine-blue capitalize font-semibold" >{el.title}</h2>
                                                    <p className="desc-price mt-[-4px] text-[13px] text-netral-cool-gray font-medium">${priceYearly ? el.price.year : el.price.moth}/{priceYearly ? 'yr' : 'mo'}</p>
                                                   {
                                                    priceYearly && 
                                                    <p className="status text-[12px] mt-[-1px] text-primary-marine-blue md:mt-[3px] font-[500]">2 month free</p>
                                                   }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        {/* choose year or moth */}
                        <div className="container-option-price w-full p-2 rounded-md  mt-5 bg-netral-magnolia">
                                <div className="mx-auto max-w-[200px] flex gap-3 items-center justify-evenly">
                                    <p className={`text-method mothly
                                        ${!priceYearly ? 'text-primary-marine-blue' :'text-netral-cool-gray'}
                                    `}>Mothly</p>
                                    {/* checked */}
                                    <div onClick={()=>{
                                        setPriceYearly(priceYearly ? false : true)
                                    }} className="checked cursor-pointer w-[40px] p-1 rounded-xl bg-primary-marine-blue">
                                        <div className={`circle w-[12px] h-[12px] rounded-full bg-white transition-all duration-500
                                            ${priceYearly ? 'translate-x-[160%]' : 'translate-x-[0%]'}
                                        `}></div>
                                    </div>
                                    <p className={`text-method yearly  
                                         ${priceYearly ? 'text-primary-marine-blue' :'text-netral-cool-gray'}
                                    `}>Yearly</p>
                                </div>
                        </div>
                    </section>
                </section>

                  {/* container button navigation nav */}
                  <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-between">
                            {/* go back  */}
                            <Link to='/' className="btn_nav_form  text-netral-cool-gray text-medium transition-all duration-100 hover:text-primary-marine-blue  grid place-items-center">
                                go back 
                            </Link>
                            {/* next step */}
                            <button onClick={()=>{
                                navigate(`/${fakeEncrytionPath.addons}`)
                            }} className="btn_nav_form bg-primary-marine-blue">
                                Next Step
                            </button>
                        </div>
                    </section>

            </section>

        </FormLayout>
    )
}

export default SelectPlan;