import React from 'react'
import "./css/navigation.css"
function Menu({name,href})
{

    function handleClick(e){
        window.location.href = href;
    }
    return(
        <div className='menu' onClick={handleClick}>{name}</div>
    )
}

function Submenu({name,children}){
    function handleClick(e){
        e.target.parentElement.classList.toggle("opened")
    }
    return(
        <div className='sub-menu'>
            <div  onClick={handleClick} className='sub-menu-name'>{name} !</div>
            {children.map(elem => {
                return elem
            })}
        </div>
    )
}


const Navigation = () => {
  return (
    <div className='navigation scrollbar-thin'>
        <div className="header">Main Menu</div>

        <Menu name="Home" href="/home" />
        <Menu name="Search" href="/home" />
        <Menu name="Create Post" href="/create" />
        <Submenu name="Categories">
            <Menu name="Bike" href="/home" />
            <Menu name="Car" href="/home" />
            <Menu name="Horse" href="/home" />
        </Submenu>
        <div className="partition"></div>
        <div className="header">Personal</div>
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Profile" href="/home" />
        <Menu name="Change Password" href="/change_password" />
        <Menu name="Change Password" href="/change_password" />
        <Menu name="Change Password" href="/change_password" />
        <Menu name="Logout" href="/logout" />

    </div>
  )
}

export default Navigation;