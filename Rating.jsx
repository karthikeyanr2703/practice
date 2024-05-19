import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdStarOutline, IoMdStar } from 'react-icons/io';

const RatingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarWrapper = styled.span`
  cursor: pointer;
  font-size: 80px;
  color: ${(props) => (props.active ? 'gold' : 'gray')};
`;

const Rating = ({ numStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleHover = (index) => {
    setHover(index);
  };
const handleclickOnContainer = () => {
  setRating(0)
  
 
}
  return (
    <RatingContainer onDoubleClick={handleclickOnContainer}>
      {[...Array(numStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <StarWrapper
            key={index}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleHover(starIndex)}
            onMouseLeave={() => handleHover(0)}
            active={starIndex <= (hover || rating)}
          >
            {starIndex <= (hover || rating) ? <IoMdStar /> : <IoMdStarOutline />}
          </StarWrapper>
        );
      })}
    </RatingContainer>
  );
};

export default Rating;
