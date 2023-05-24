import { ChangeEvent, useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";
import changeArrow from "../assets/changeArrow.svg";

interface Coins {
  bid: string;
}

const Converter = () => {
  const [coins, setCoins] = useState<Coins[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>("USD");
  const [input, setInput] = useState<string>("1");

  const apiUrl = import.meta.env.VITE_API;

  const getCoin = async (apiUrl: any) => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    const coinUrl = `${apiUrl}${selectedCoin}`;
    getCoin(coinUrl);
  }, [selectedCoin]);

  const handleCoin = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(e.target.value);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const coinCheck = () => {
    if (selectedCoin === "USD") {
      return "$";
    } else {
      return "€";
    }
  };

  const inputValue: any = input;
  const buy: number = coins[0] ? Number(coins[0].bid) : 0;
  const calculate = inputValue * buy;
  const result = Math.floor(calculate * 100) / 100;

  return (
    <div className="flex flex-col gap-5">
      <p className="font-semibold text-xl">Conversor de moedas</p>
      <div className="flex gap-5">
        <div className="md:flex">
          <div className="border-2 border-[#94A3B8] focus-within:border-[#7C3AED] rounded-lg w-[18.25rem] h-14 pl-4 flex justify-between items-center relative">
            <p className="mr-1">{coinCheck()}</p>
            <input
              type="number"
              className="h-6 w-40 outline-none border-r border-[#94A3B8] bg-white"
              value={input}
              onChange={handleInput}
            />
            <div className="border-r border-[#94A3B8]" />
            <select
              value={selectedCoin}
              onChange={handleCoin}
              className="appearance-none w-[100px] p-3 h-[52px] rounded-r-lg outline-none focus:bg-[#EDE9FE]"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <img src={arrow} alt="" className="absolute right-0 mr-6" />
          </div>
          <div className="md:flex flex justify-center mt-4 md:mt-0 px-4">
            <img src={changeArrow} alt="" />
          </div>
          <div className="border-2 border-[#94A3B8] focus-within:border-[#7C3AED] rounded-lg w-[18.25rem] h-14 pl-4 flex justify-between items-center relative mt-4 md:mt-0">
            <p className="mr-1">R$</p>
            <input
              type="text"
              value={result}
              className="h-6 w-44 outline-none border-r border-[#94A3B8] bg-white"
              disabled
            />
            <div className="border-r border-[#94A3B8]" />
            <p className="w-[100px] p-3 flex justify-center">BRL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
