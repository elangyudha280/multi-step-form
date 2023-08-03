import React,{useState} from "react";

const SidebarForm = ()=>{
    let [activeStep,setActiveState] = useState(1)
    let step = [
      {
        id:1,
        step:1,
        info_step:'your info'
      },
      {
        id:2,
        step:2,
        info_step:'select plan'
      },
      {
        id:3,
        step:3,
        info_step:'add-ons'
      },
      {
        id:4,
        step:4,
        info_step:'summary'
      }
  
    ]
    return (
        <aside className="sidebar">
                    <div className="content_sidebar">
                        {
                        step?.map((el,i)=>{
                            return (
                            <div className="item-sidebar" key={el.id}>
                                <div onClick={()=>{setActiveState(el.step)}} className={`nav-number cursor-pointer transition-all duration-200 ${activeStep === el.step ? 'bg-primary-light-blue text-black ' : 'bg-transparent text-white shadow-[0_0_0_1px_white]'}`}>
                                {el.step}
                                </div>
                                <div className=" flex-col hidden flex-1 md:flex w-full h-full uppercase select-none">
                                    <h4 className="step p-0 m-0 text-[12px] text-neutral-300">step {el.step}</h4>
                                    <h2 className={`info text-[11px] m-0 p-0 text-neutral-50 font-semibold tracking-widest`}>{el.info_step}</h2>
                                </div>
                            </div>
                            )
                        })
                        }
                    </div>
        </aside>
    )
}

export default SidebarForm;