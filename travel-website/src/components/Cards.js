import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import travelImage2 from '../images/img-2.jpg'
import travelImage3 from '../images/img-3.jpg'
import travelImage4 from '../images/img-4.jpg'
import travelImage8 from '../images/img-8.jpg'
import travelImage9 from '../images/img-9.jpg'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={travelImage9}
              text="Explore the hidden waterfall deep inside the amazon Jungle"
              label="Adventures"
              path="/services"
            />
            <CardItem 
              src={travelImage2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src={travelImage3}
              text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem 
              src={travelImage4}
              text="Experience Football on Top og the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem 
              src={travelImage8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
