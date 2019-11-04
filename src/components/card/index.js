import React from "react"
import "./card.scss"

const Card = ({ img = "", title = "", desc = "", learn = "#" }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__image-container">
          <img className="card__image" src={img} alt="" />
        </div>
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#57959e"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth={3}
            fill="transparent"
          />
        </svg>
        <div className="card__content">
          <h1 className="card__title">{title}</h1>
          <p>{desc}</p>
          <a href={learn} className="button primary small">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
