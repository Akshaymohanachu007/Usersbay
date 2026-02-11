import {Outlet} from  "react-router-dom"
import React from "react"
import Navbar from "../components/Navbar"
function RootLayout(){
    return(
        <>
        <Navbar/>

        <main>

            <Outlet/>
            
        </main>

        </>
    )
}
export default RootLayout