import React from "react";

import { Navigate,Outlet } from "react-router-dom";
import fakeEncrytionPath from "../data/fakeEncrytionPath";

const ProtectedFinishingUp = ()=>{

    // check jika data sessionnya ada bisa akses page finishingUp
    if(sessionStorage.getItem('dataSession') && JSON.parse(sessionStorage.getItem('dataSession')).personalInfo && JSON.parse(sessionStorage.getItem('dataSession')).selectPlan && JSON.parse(sessionStorage.getItem('dataSession')).pickAddOns) {
        return <Outlet/>
    }

    // jika data sessionnya tidak ada maka redirect ke halaman home 
    return <Navigate replace to='/notfound'/>

}

const ProtectedSuccessPage = ()=>{
    if(!sessionStorage.getItem('success')){
        return <Navigate replace to={`/notfound`} />
    }
    return <Outlet/>
}

export {ProtectedFinishingUp,ProtectedSuccessPage}