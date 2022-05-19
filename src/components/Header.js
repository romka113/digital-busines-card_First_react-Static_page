import React from "react"
import Icon from"../image/icon.png"
function Header(){
    return(
        <header className="header">
            <img className="header--img" src={Icon} alt="image"/>
        </header>
    )
}
export default Header