import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const { id, name, info, image, price } = tour;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p id={`tour-item-para-${id}`}>
        {showMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={handleShowMore}>
          {showMore ? 'Show less' : 'Read more'}
        </button>
      </p>
      <button onClick={() => onDelete(id)} id={`delete-btn-${id}`} className="delete-btn">
        Not interested
      </button>
    </article>
  );
};

export default Tour;
