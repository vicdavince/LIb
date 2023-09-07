import React from 'react';
import PropTypes from 'prop-types';

// The component takes in props to fill in the cards
const Card = ({ image, item1, item1Val, item2, item2Val, item2Val1 }) => {
  return (
    <div className="w-40">
      <img className="w-40 h-52 object-cover" src={image} alt="image" />
      <div className="mainBackgroung">
        <p><span className="font-bold">{item1}:</span> <span>{item1Val}</span></p>
        <p><span className="font-bold">{item2}:</span> <span>{item2Val ? item2Val : item2Val1}</span></p>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  item1: PropTypes.string.isRequired,
  item1Val: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item2Val: PropTypes.string,
  item2Val1: PropTypes.number,
}

export default Card
