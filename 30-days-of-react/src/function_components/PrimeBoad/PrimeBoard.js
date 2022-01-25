import React from "react";
import './PrimeBoard.css'

const PrimeBoard = () => {
    const isPrime = Array(32).fill(true);
    const primeList = [];
    for (let i = 2; i <= 32; i++) {
      if (isPrime[i]) {
        for (let j = i * 2; j <= 32 * 32; j += i) {
          isPrime[j] = false;
        }
        primeList.push(i);
      }
    }
    return (
      <div className="wrapper">
        <h1 className="text-center">30 Days of React</h1>
        <h3 className="text-center">Number Generator</h3>
        <div className="board-container">
          {Array(32)
            .fill(undefined)
            .map((item, index) => {
              const itemColor = primeList.includes(index)
                ? "item-red"
                : index % 2
                ? "item-yellow"
                : "item-green";
              return <div className={`board-item ${itemColor}`}>{index}</div>;
            })}
        </div>
      </div>
    );
};

  export default PrimeBoard