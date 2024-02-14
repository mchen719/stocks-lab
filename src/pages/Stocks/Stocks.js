import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'


export default function Stocks (props) {
  return (
    <div className="stock">
      {currencies.map((stock) => {
        const { name, symbol } = stock;

        return (
          <div className="stock">
            <h2>Name: {props.stock.name}</h2>
            <h2>Price: {props.stock.price}</h2>
          </div>
        );
      })}
    </div>
  );
};
