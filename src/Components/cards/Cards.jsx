
// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";

const Cards = () => {
const [cards,setCards] = useState([])

useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCards(data))

},[])





    return (
        <div className="md:grid grid-cols-3 gap-5 w-9/12">
            {
                cards.map((card,index) => <Card card={card} key={index}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    
};

export default Cards;