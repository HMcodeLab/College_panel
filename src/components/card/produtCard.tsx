import Image from "next/image";
import React from "react";

type CardDataType = {
  title: string;
  image: string;
  price: number;
  // Add other fields as needed
};

type Props = {
  cardData: CardDataType;
};

const ProductCard = ({ cardData }: Props) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <Image
        src={cardData.image}
        alt={cardData.title}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold">{cardData.title}</h2>
      <p className="text-sm text-gray-600">₹{cardData.price}</p>
    </div>
  );
};

export default ProductCard;
