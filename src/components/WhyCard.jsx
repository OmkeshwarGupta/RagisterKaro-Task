import React from 'react';

const Card = ({ title, description, svg, color, bgColor }) => {
    return (
      <div
        className="p-6 rounded-lg flex flex-col h-56 items-center text-center"
        style={{ backgroundColor: bgColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 40 40"
          fill={color}
        >
          <path d={svg} />
        </svg>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };

export default Card;
