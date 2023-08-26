import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const PageNotFound = ()=>{

    useEffect(()=>{
        document.title = 'notfound page'
    },[])
    return (
        <section className="notfound w-full h-[100vh] relative overflow-hidden py-2 px-4 bg-netral-magnolia flex items-center">
            <div className="relative  w-[300px] mx-auto">

                <h2 className="404 max-[300px]:text-[4em] text-[8em] text-primary-marine-blue font-bold text-center tracking-widest">404</h2>
                <p className="text-[1.2em] text-center font-semibold text-primary-marine-blue">
                    Oops... something wrong
                </p>
                <Link to={'/'} className="text-center block  mt-2 text-[1em] underline font-medium text-blue-400 ">
                    Go Back 
                </Link>

            </div>
        </section>
    )
}

export default PageNotFound