import React from "react";

import { Navigate,Outlet } from "react-router-dom";

const ProtectedFinishingUp = ()=>{

    // check jika data sessionnya ada bisa akses page finishingUp
    if(sessionStorage.getItem('dataSession') && JSON.parse(sessionStorage.getItem('dataSession')).personalInfo && JSON.parse(sessionStorage.getItem('dataSession')).selectPlan && JSON.parse(sessionStorage.getItem('dataSession')).pickAddOns) {
        return <Outlet/>
        
    }

    // jika data sessionnya tidak ada maka redirect ke halaman home 
    return <Navigate replace='/' to='/'/>

}

export {ProtectedFinishingUp}