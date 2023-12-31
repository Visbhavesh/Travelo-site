import React, { useEffect, useState } from 'react';

export const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-80">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-gray-800 font-bold text-xl">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-bold">${price}</span>
          <span className="text-gray-500">
            {discountPercentage}% off
          </span>
        </div>
      </div>
    </div>
  );
};