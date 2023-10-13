import React from 'react'
import "./css/card.css";
const Card = ({id,src,category,title,author}) => {

    function handleClick(e){
        e.preventDefault();
        window.location.href = "/details/" + id
    }

  return (
    <div className="card" onClick={handleClick}>
        <div className="image">
            <img src={src} alt="cnbhc" />
        </div>
        <div className="details">
            <div className="category badge"><span>{category}</span></div>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
        </div>
    </div>
  )
}

export default Card;