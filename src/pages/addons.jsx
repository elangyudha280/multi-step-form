import React, { useState,useEffect} from "react";

// import layout
import FormLayout from "../layout/formLayout";
import fakeEncrytionPath from "../data/fakeEncrytionPath";

import { Link,useNavigate } from "react-router-dom";



const AddOnsPage = ()=>{

    let navigate = useNavigate()

    const [optionPickAddOns,setOptionPickAddOns] =useState( [
        {
            id:1,
            title:'Online service',
            description:'Access to multiplayer game',
            price:{
                moth:1,
                year:10
            },
            isSelected:false
        },
        {
            id:2,
            title:'Large storage',
            description:'Extra 1TB of cloud save',
            price:{
                moth:2,
                year:20
            },
            isSelected:false
        },
        {
            id:3,
            title:'Customizable Profile',
            description:'Custom theme on your profile',
            price:{
                moth:1,
                year:10
            },
            isSelected:false
        }
    ])

    // tate current value
    const [currentValueAdd,setCurrentValueAdd] = useState({})
    

    let handleSelect = (data)=>{
        // get current select data
        let getCurrentDataSelect = optionPickAddOns.find((el)=>{
            return el.id == data.id
        })
        // set data baru isSelected true dari data yg di cari
        let setDataBaruSelect = {...getCurrentDataSelect,isSelected:(getCurrentDataSelect.isSelected == false) ? true : false}
        
        // get data selain current data select
        let elseCurrentDataSelect = optionPickAddOns.filter(el =>{
            return el.id != data.id
        })
        
        // dummy array untuk nampung data sementara elseCurrentDataSelect
        let arrKosong = [...elseCurrentDataSelect]

        // atur posisi data update current data sesuai posisi index awal 
        arrKosong.splice(data.id - 1,0,setDataBaruSelect)
        
        // update Data option data
        setOptionPickAddOns(arrKosong)

        

    }
 
    // handle submit form3
    const handleSubmitData = (event) =>{
        event.preventDefault()
     
        // FILTER DATA PICK ADD ONS YG DI PILIH
        let filterDataPickAddOns = optionPickAddOns.filter((el)=>{
            return el.isSelected === true
        })

        console.log(filterDataPickAddOns)
     
        // navigate(`/${fakeEncrytionPath.finishingUp}`)
    }

    return (
        <FormLayout title='addons' step='3'>

            <section className="main_content_form ">
                     {/* container form */}
                <section className="container_form form_add_ons  animate-show opacity-0 flex-1 w-full h-full px-5 md:px-2">

                    <section className="main_form main_form_add_ons ">
                        <h2 className="title-form text-[30px] font-bold text-primary-marine-blue">
                            Pick add-ons
                        </h2>
                        <p className="sub_title_form text-[15px] font-medium text-netral-cool-gray">
                            add-ons help enhance your gaming experience. 
                        </p>

                        <div className="container-add-ons w-full flex flex-col mt-4 gap-3">
                        {
                            optionPickAddOns?.map(el=>{
                                return (
                                    <div key={el.id} onClick={handleSelect.bind(this,el)} className={`card_add_ons
                                    ${(el.isSelected === true) ? 'shadow-primary-marine-blue bg-netral-magnolia ' : 'shadow-netral-light-gray bg-white'}`}> 
                                        <div className="checkbox  pr-3 flex items-center justify-center">
                                            <input type="checkbox" name="" checked={el.isSelected ? true : false} id="" readOnly  className="w-[17px] h-[17px]  accent-primary-purplish-blue " />
                                        </div>
                                        <div className="title_card flex-1 w-full">
                                                <h2 className="title_card_ons text-primary-marine-blue text-[16px] font-semibold">{el.title}</h2>
                                                <p className="desc_card_on text-[13px] text-netral-cool-gray font-medium p-0 m-0 mt-[-3px]">
                                                    {el.description}
                                                </p>
                                        </div>
                                        <div className="price w-[40px] flex items-center justify-center">
                                            <p className="text-[13px] text-primary-marine-blue">+{el.price?.moth}/mo</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </section>

                    </section>

                    {/* container button navigation nav */}
                    <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-between">
                            {/* go back  */}
                            <Link to={`/${fakeEncrytionPath.selectPlan}`} className="btn_nav_form  text-netral-cool-gray text-medium transition-all duration-100 hover:text-primary-marine-blue  grid place-items-center">
                                go back 
                            </Link>
                            {/* next step */}
                            <button onClick={handleSubmitData} className="btn_nav_form bg-primary-marine-blue">
                                Next Step
                            </button>
                        </div>
                    </section>

            </section>

        </FormLayout>
    )
}

export default AddOnsPage;


