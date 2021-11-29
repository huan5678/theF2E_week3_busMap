import { useState, useEffect, useContext } from "react";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";
const BG = dynamic(() => import("../components/BG"), { ssr: false });
import Card from "../components/Card";
import { Bottom } from "../components/icons";
import { cityCTX } from "../context/index";
import useSWR from "swr";
import fetchData from "../api/fetchData";
import ResultCard from "../components/ResultCard";

// const apiUrl = "https://ptx.transportdata.tw/MOTC/v2/";
// ${apiUrl}Bus/${props}/City/${City}?$format=JSON

const baseUrl = (props, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/${props}/City/${City}?$format=JSON`;
const realTimeByFreq = (City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/${City}?$format=JSON`;

export default function Home() {
  const [isSelect, setIsSelect] = useState(false);
  const [city, setCity] = useState("Taipei");
  const [cityCN, setCityCN] = useState("台北市");
  const [target, setTarget] = useState("Route");
  const cities = useContext(cityCTX);
  const [result, setResult] = useState([]);

  const handleSelect = (e, index) => {
    let idx = e.nativeEvent.target.selectedIndex;
    setCityCN(e.nativeEvent.target[idx].text);
    setCity(e.target.value);
  };

  const targetSelect = (e) => {
    setTarget(e.target.value);
  };

  let url = baseUrl(target, city);
  const { data, error } = useSWR(url, fetchData, { suspense: true });

  let realTimeUrl = realTimeByFreq(city);
  const { data: realTimeData, error: realTimeError } = useSWR(
    realTimeUrl,
    fetchData,
    { suspense: true }
  );

  console.log(realTimeData);
  console.log(data);

  const handleResultSelect = (e) => {
    let resultArr = [];
    if (target === "Route") {
      resultArr = data
        .filter((item) => item.RouteName.Zh_tw === e.target.value)
        .map((item) => ({
          ...item,
          city: cityCN,
          target,
        }));
    } else {
      resultArr = data
        .filter((item) => item.StationName.Zh_tw === e.target.value)
        .map((item) => ({
          ...item,
          city: cityCN,
          target,
        }));
    };
    setResult(resultArr);
  };

  return (
    <BG title="index">
      <section className="container px-4">
        <h1 className="text-primary text-center text-4xl font-bold mb-5 pt-[1.875rem]">
          找公車
        </h1>
        <Card className="shadow bg-white mb-12 md:max-w-lg md:mx-auto">
          <div className="flex justify-center items-center space-x-10 mb-5">
            <label className="inline-flex items-center text-primary">
              <input
                type="radio"
                name="findBusTarget"
                className="h-6 w-6 accent-primary"
                value="Route"
                onChange={targetSelect}
              />
              <span className="ml-2">查路線</span>
            </label>
            <label className="inline-flex items-center text-primary">
              <input
                type="radio"
                name="findBusTarget"
                className="h-6 w-6 accent-primary"
                value="Station"
                onChange={targetSelect}
              />
              <span className="ml-2">查站牌</span>
            </label>
          </div>
          <div>
            <div className="flex justify-between items-center mb-5 bg-gray-light p-4 rounded-2xl">
              <label className="text-primary mr-4">
                {cityCN !== "" ? cityCN : "縣市"}
              </label>
              <select
                className="appearance-none bg-gray-light w-2/3 p-2 focus:outline-none"
                onChange={(e) => handleSelect(e)}
                onClick={() => setIsSelect(!isSelect)}
              >
                <option className="bg-white" value={city} disabled selected>
                  請選擇
                </option>
                {cities.map((item, index) => (
                  <option
                    className="bg-white"
                    key={item.CityName}
                    value={item.City}
                  >
                    {item.CityName}
                  </option>
                ))}
              </select>
              <Bottom
                className={`fill-current text-primary ${
                  isSelect ? "rotate-180" : ""
                }`}
              />
            </div>
            <div className="flex items-center bg-gray-light p-4 rounded-2xl">
              <label htmlFor="search" className="text-primary mr-4">
                搜尋
              </label>
              <input
                id="search"
                list="searchData"
                name="search"
                className="p-2 focus:outline-none bg-gray-light w-10/12"
                onChange={(e) => handleResultSelect(e)}
              />
              <datalist id="searchData" className="bg-gray-light p-2">
                {data !== undefined
                  ? target === "Route"
                    ? data.map((item, idx) => (
                        <option
                          key={item.RouteUID}
                          value={item.RouteName.Zh_tw}
                        >
                          {item.RouteName.Zh_tw}
                        </option>
                      ))
                    : data.map((item, idx) => (
                        <option
                          key={item.StationUID}
                          value={item.StationName.Zh_tw}
                        >
                          {item.StationName.Zh_tw}
                        </option>
                      ))
                  : null}
              </datalist>
            </div>
          </div>
        </Card>
        {result !== undefined ?
          <ResultCard props={result} />
        : null}
      </section>
    </BG>
  );
}
