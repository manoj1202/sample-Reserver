import React from "react"
import {Route, Link} from "react-router-dom"
import Home from "./home.js"
import Reserve from "./reserve"
import GetReservation from "./getReservation"

function NavLink (){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                    <Link to="/getreservation">GetReservation</Link>
                </li>
            </ul>

        <Route exact path="/" component={Home} />
        <Route path ="/reservation" component = {Reserve} />
        <Route path = "/getreservation" component = {GetReservation} />
        </div>
    )
}

export default NavLink