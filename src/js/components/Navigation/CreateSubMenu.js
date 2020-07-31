import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, HashRouter as RouterHash} from "react-router-dom";
import {subMenu} from "../../db/dataBase";
// import {Link} from "react-router-dom";


const changeColorNavLinks = (e) => {
    const arrayNavLinks = Array.from(document.getElementsByClassName("text_of_headers_menu"))
    arrayNavLinks.map((el)=>{
        el.style.color = "#807f81"
        e.target.style.color = "white"
    })
}
const changeColorSubMenu = (e) => {
    const arraySubMenu = Array.from(document.getElementsByClassName("header_of_submenu"))
    arraySubMenu.map((el)=>{
        el.style.color = "#807f81"
        e.target.style.color = "white"
    })
}

export function createSubMenu (position, link, text, number, classN) {
    return (
        <Fragment>
            <div className={classN}>
                <div className=""><p className='number_menu'>{number}</p><Link to={link} onMouseOver={changeColorNavLinks}  className="text_of_headers_menu">{text}</Link></div>
                <ul className="submenu">
                    {position.map((el)=>(
                        <li key={el.id}>
                            <Link onMouseOver={changeColorSubMenu} className="header_of_submenu" to={el.link}>{el.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}
