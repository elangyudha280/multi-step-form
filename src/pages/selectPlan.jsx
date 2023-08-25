import React,{useEffect, useState}from "react";

// import layout
import FormLayout from "../layout/formLayout";

// import option selec plan
import {optionSelectPlan} from "../data/optionSelectDataForm";

import { Link,useNavigate } from "react-router-dom";
import fakeEncrytionPath from "../data/fakeEncrytionPath";

const SelectPlan = ()=>{

    let navigate = useNavigate()

    // state card plan active
    let [planActive,setPlanActive] = useState(1)

    // state moth and yearly
    let [priceYearly,setPriceYearly] = useState(false)

    // state current Data
    let [currentDataSelectPlan,setCurrentDataSelectPlan] = useState({})

    // check disabled button


    function setDataSession(currentData,priceYearly){
        let dataSelectPlan = {
            ...currentData,
            price:(!priceYearly) ? {moth:currentDataSelectPlan.price?.moth} : {year:currentDataSelectPlan.price?.year} 
        }

        // get data  session sebelumnya
        const dataSessionAwal = JSON.parse(sessionStorage.getItem('dataSession'))
        
        // merge data awal session dengan data select plan
        const mergeData = {
            ...dataSessionAwal,
            selectPlan: dataSelectPlan
        }

        // set merge data ke session
        sessionStorage.setItem('dataSession',JSON.stringify(mergeData))
        return
    }

    useEffect(()=>{
       
        // // // cek data id plan dari local storage
        if(sessionStorage.getItem('dataSession') && JSON.parse(sessionStorage.getItem('dataSession')).selectPlan) {
            let parse = JSON.parse(sessionStorage.getItem('dataSession')).selectPlan
            
            // set priceyearly 
            setPriceYearly((parse?.price?.year) ? true : false)
            // set active plan 
            setPlanActive(parse?.id)
            // set select current data
            setCurrentDataSelectPlan(optionSelectPlan[planActive-1])
        return
        }

        // set default current select data
        setCurrentDataSelectPlan(optionSelectPlan[planActive-1])
    },[])


    // event handle select plan
    const handleSelectPlan = (el,event)=>{
        setPlanActive(el.id)

        // set current data
        setCurrentDataSelectPlan(el)
        // set data select plan
        let dataSelectPlan = {
            ...el,
            price:(!priceYearly) ? {moth:currentDataSelectPlan.price?.moth} : {year:currentDataSelectPlan.price?.year} 
        }

        // get data  session sebelumnya
        const dataSessionAwal = JSON.parse(sessionStorage.getItem('dataSession'))
        
        // merge data awal session dengan data select plan
        const mergeData = {
            ...dataSessionAwal,
            selectPlan: dataSelectPlan
        }

        // set merge data ke session
        sessionStorage.setItem('dataSession',JSON.stringify(mergeData))
        

    }



    // event handle submit select plan
    const handleSubmitSelectPlan = (event)=>{
        // fungsi set data session 
        setDataSession(currentDataSelectPlan,priceYearly)

        // navigate to form pick add ons
        navigate(`/${fakeEncrytionPath.addons}`)
    }
    return (
        <FormLayout title='Select Your Plan' step='2'>

            <section className="main_content_form"> 

                {/* container form */}
                <section className="container_form form-select-plan animate-show opacity-0 flex-1 w-full h-full px-5 md:px-2">
                    <section className="main_form main_form_select_plan">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Select your plan
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            You have the option of monthly or yearly billing. git add 
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
                                        setPriceYearly((state => !state ? true : false))
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
                            <button onClick={handleSubmitSelectPlan}  className={`btn_nav_form bg-primary-marine-blue transition-all duration-300 `}>
                                Next Step
                            </button>
                        </div>
                    </section>

            </section>

        </FormLayout>
    )
}

export default SelectPlan;