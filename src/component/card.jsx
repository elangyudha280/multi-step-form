
import React,{useEffect, useState} from "react";


const CardFinishingUp = ({selectPlan,pickAddOns})=>{


    let [totalPrice,setTotalPrice] = useState()

    useEffect(()=>{

        let pricePickAddOns = pickAddOns.map(el => el.price.moth)
        let priceSelectPlan = selectPlan?.price?.moth ? selectPlan?.price?.moth : selectPlan?.price?.year
        let merge = [...pricePickAddOns,priceSelectPlan].reduce((acc,curr)=>{return acc+curr},0)
        setTotalPrice(merge)
    },[])

    return (
        <>
        <div className="finishing_header w-full px-4 py-2 bg-netral-magnolia rounded-md">
            {/* select plan */}
            <div className="select_select_plan_info w-full flex gap-2 items-center py-4 border-b-2 border-b-neutral-200">
                <h2 className="title_select_plan flex-1 w-full text-[14px] font-semibold text-primary-marine-blue">
                {selectPlan?.title} ({selectPlan?.price?.moth ? 'monthly' : 'yearly'})
                </h2>
                <h2 className="price_select_plan text-[14px] font-bold text-primary-marine-blue ">
                    ${selectPlan?.price?.moth ? selectPlan?.price?.moth : selectPlan?.price?.year}/{selectPlan?.price?.moth ? 'monthly' : 'yearly'}
                </h2>
            </div>
                                    {/* add ons  */}
                                    <div className="add_ons_info mt-1  overflow-x-hidden overflow-y-auto w-full flex flex-col ">
                                        {
                                            pickAddOns?.map((el,i) =>{
                                                return (
                                                    <div key={i} className="py-2 w-full flex items-center">
                                                        <h2 className="title_add_ons flex-1 w-full text-[13px] font-medium text-netral-cool-gray">
                                                            {el.title}
                                                        </h2>
                                                        <h2 className="price_add_ons text-[13px] font-bold text-primary-marine-blue ">
                                                         ${el.price?.moth}/mo
                                                        </h2>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>                           
                                                </div>
                                                <div className="finishin_body w-full flex items-center px-4 py-3 ">
                                                    <h2 className="title_total_price flex-1 w-full text-[16px] font-medium text-netral-cool-gray">
                                                        Total
                                                    </h2>
                                                    <h2 className="total_price text-[20px] truncate font-bold text-primary-purplish-blue">
                                                        +${totalPrice} 
                                                    </h2>
                                                </div>
        </>
    )
}

export default CardFinishingUp