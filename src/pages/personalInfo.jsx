import React,{useState,useReducer} from "react";
import FormLayout from "../layout/formLayout";

// import validator
import validator from "validator";

// import reduce personal info
import reducerPersonalInfo from "../context/reducer/reducerFromPersonalInfo";

import { useNavigate } from "react-router-dom";

import fakeEncrytionPath from "../data/fakeEncrytionPath";

const PagePersonalInfo = ()=>{

    let navigate = useNavigate()

    // state handle data form personal info
    let [state,dispatch] = useReducer(reducerPersonalInfo,{
        username:'',
        email:'',
        phoneNumber:''
    })

    // state handle error 
    let [handleError,setHandleError] = useState({
        err:false,
        msg:'',
        type:'',
    })
    
    // event handle data input
    const handleInput = (actionType,data)=>{
        dispatch({type:`${actionType}`,payload:data})
    }

    // handle submit
    const handleSubmit = (event)=>{
        event.preventDefault()
        // jika data username nya tidak valid
        if(validator.isNumeric(state.username)){
            setHandleError({err:true,msg:'username harus mengandung karakter',type:'usernameError'})
            return
        }
        // jika data email tidak valid
       else if(!validator.isEmail(state.email)){
            setHandleError({err:true,msg:'format email harus seperti ex@domain.com',type:'emailError'})
            return
        }
          // jika data phone mobile tidak valid
        else  if(!validator.isMobilePhone(state.phoneNumber)){
            setHandleError({err:true,msg:'format number tidak valid',type:'NumberError'})
            return
        }

        // jika data valid
        setHandleError({err:false,msg:'',type:''})

        // set data ke session
        
        navigate(`/${fakeEncrytionPath.selectPlan}`)
    }

    return (
        <FormLayout title='Personal Info' step='1'>
            {/* content personal info */}
            <form action="" onSubmit={handleSubmit} autoComplete="off" className="w-full h-full relative">
                <section className="main_content_form ">
                    {/* container form */}
                    <section className="container_form opacity-0 animate-show flex-1 w-full h-full px-5 md:px-2">
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
                                            <div className="flex flex-wrap gap-2 justify-between items-center mb-1">
                                                <label htmlFor="username" className="label-input">Name</label>
                                                
                                                    {handleError.err && handleError.type === 'usernameError' && 
                                                        <span className="error-input">
                                                            {handleError.msg}
                                                        </span>}
                                            </div>
                                            <input type="text" onChange={(e)=>{handleInput('setUsername',e.target.value)}} required placeholder="e.g Stepen King" id="username" className={`input-item ${handleError.err && handleError.type === 'usernameError' ? 'border-red-500' : 'border-netral-light-gray'}` } />
                                        </div>
                                    {/* email */}
                                    <div className="input-group mt-4">
                                        <div className="flex flex-wrap gap-2 justify-between items-center mb-1">
                                            <label htmlFor="email" className="label-input">Email address</label>
                                                {handleError.err && handleError.type === 'emailError' && 
                                                <span className="error-input">
                                                    {handleError.msg}
                                                </span>}
                                        </div>
                                            <input type="email" onChange={(e)=>{handleInput('setEmail',e.target.value)}} required placeholder="e.g Stepenking@lorem.com" id="email"  className={`input-item ${handleError.err && handleError.type === 'emailError' ? 'border-red-500' : 'border-netral-light-gray'}` } />
                                    </div>

                                    {/* phone number */}
                                    <div className="input-group mt-4">
                                            <div className="flex flex-wrap gap-2 justify-between items-center mb-1">
                                            <label htmlFor="phoneNumber" className="label-input">Phone Number</label>
                                                    {handleError.err && handleError.type === 'NumberError' && 
                                                    <span className="error-input">
                                                        {handleError.msg}
                                                    </span>}
                                            </div>
                                            <input type="tel" onChange={(e)=>{handleInput('phoneNumber',e.target.value)}} required placeholder="e.g +1 234 567 890" id="phoneNumber"  className={`input-item ${handleError.err && handleError.type === 'NumberError' ? 'border-red-500' : 'border-netral-light-gray'}` } />
                                        </div>
                                </div>
                        </div>
                    </section>

                    {/* container button navigation nav */}
                    <section className="container_button_nav ">
                        <div className="mx-auto max-w-[500px] h-full  flex justify-end">
                            <button className="btn_nav_form bg-primary-marine-blue">
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