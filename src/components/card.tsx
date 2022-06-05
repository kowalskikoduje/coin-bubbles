import React from "react";
import { Coin } from "../utils/types";
import { useUI } from "../contexts/ui.context";

export default function Card({ data }: { data: Coin }) {
  const { openModal, setCryptoSymbol } = useUI();
  const handleClick = () => {
    setCryptoSymbol(data.symbol);
    openModal();
  };

  return (
    <div
      className="ktq4 transform transition duration-500 hover:scale-110 cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="pt-3 font-semibold text-lg text-white">{data.symbol}</h3>
      <p className="pt-2 value-text text-md text-gray-200">{data.name}</p>
    </div>
  );
}
