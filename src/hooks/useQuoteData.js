import { useState } from "react";
import quotes from "../quotes";

const randomNum = () => Math.floor(Math.random() * 10);

const useQuoteData = () => {
  const [num, setNum] = useState(randomNum());
  const { quote, author } = quotes[num];

  const getRandomQuote = () => {
    let newNum = Math.floor(Math.random() * 10);
    while (num === newNum) {
      newNum = randomNum();
    }
    setNum(newNum);
  };

  return { quote, author, getRandomQuote };
};

export default useQuoteData;