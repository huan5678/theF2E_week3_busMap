import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetchData from "../api/fetchData";
import { Info, Map, Stop, LR, Bus } from "../components/icons";
import StateCard from "../components/StateCard";
import Card from "../components/Card";

const estimatedTimeOfArrivalUrl = (RouteName, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${City}/${RouteName}?$format=JSON`;

const displayStopOfRoute = (RouteName, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/${City}/${RouteName}?$format=JSON`;

const RealTimeByFrequency = (RouteName, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/${City}/${RouteName}?$format=JSON`;

const RealTimeNearStop = (RouteName, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeNearStop/City/${City}/${RouteName}?$format=JSON`;

const Vehicle = (City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/Vehicle/City/${City}?$format=JSON`;

const Route = (RouteName, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${City}/${RouteName}?$format=JSON`;

const Operator = (City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/Operator/City/${City}?$format=JSON`;

const Schedule = (RouteName, City) =>
  `https://ptx.transportdata.tw/MOTC/v2/Bus/Schedule/City/${City}/${RouteName}?$format=JSON`;

function DynamicBusState(props) {
  return (
    <div className="container">
      <div className="flex justify-between items-center px-4 gap-4 mb-7.5">
        <button
          type="button"
          className={`py-2 ${
            props.roundTrip === "to"
              ? "bg-primary text-white"
              : "bg-gray-dark text-black"
          } rounded-2xl grid place-content-center w-1/2`}
          onClick={() => props.handleRoundTrip("to")}
        >
          {props.query.startStop}
        </button>
        <LR className="fill-current text-gray-dark" />
        <button
          type="button"
          className={`py-2 ${
            props.roundTrip === "for"
              ? "bg-primary text-white"
              : "bg-gray-dark text-black"
          } rounded-2xl grid place-content-center w-1/2`}
          onClick={(e) => props.handleRoundTrip("for")}
        >
          {props.query.endStop}
        </button>
      </div>
      <ul className="pl-4">
        {props.displayStopOfRouteData !== undefined ? (
          <StateCard
            displayStopOfRouteData={props.displayStopOfRouteData}
            roundTrip={props.roundTrip}
            result={props.result}
          />
        ) : null}
      </ul>
    </div>
  );
}

function BusInformation(){
const router = useRouter();
  const { query } = router;

  const { data: routeData, error: routeError } = useSWR(Route(query.name, query.city), fetchData);

  const {data: operatorData, error: operatorError } = useSWR(Operator(query.city), fetchData);

  const [operatorInfo, setOperatorInfo] = useState([]);


  const calcOperator = () => {
    let resultArr = [];
    operatorData !== undefined
      ? routeData !== undefined
          ? ( operatorData.map((item, idx) =>
              item.OperatorID === routeData[0].Operators[0].OperatorID
              ? resultArr.push(item) : null
            ), setOperatorInfo(resultArr))
          : null
      : null;
  };
  
  useEffect(() => {
    calcOperator();
    console.log(routeData);
    console.log(operatorData);
    console.log(operatorInfo);
  }, [routeData, operatorData]);

  return operatorInfo === undefined || operatorInfo.length === 0 ? null : (
    <div className="container px-4">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <Card className="bg-white space-y-3 w-full">
          <span className="inline-block rounded-2xl bg-yellow text-primary py-1 px-3 text-h5">
            公車資訊
          </span>
          <h2 className="font-bold">{ operatorInfo[0].DepartureStopNameZh}-{operatorInfo[0].DestinationStopNameZh}</h2>
          <p className="flex">
            <Bus className="fill-current" />
            {operatorInfo[0].OperatorName.Zh_tw}
            {operatorInfo[0].OperatorPhone}
          </p>
        </Card>
        <Card className="bg-white space-y-3 w-full">
          <span className="inline-block rounded-2xl bg-yellow text-primary py-1 px-3 text-h5">
            票價資訊
          </span>
          <h2 className="font-bold">
            收費方式
            <span className="font-normal">
              {operatorInfo[0].TicketPriceDescriptionZh}
            </span>
          </h2>
        </Card>
      </div>
    </div>
  );
}

const Detail = () => {
  const router = useRouter();
  const { query } = router;

  const { data: realTimeFrequencyData, error: realTimeFrequencyError } = useSWR(
    RealTimeByFrequency(query.name, query.city),
    fetchData
  );
  const {
    data: estimatedTimeOfArrivalData,
    error: EstimatedTimeOfArrivalError,
  } = useSWR(estimatedTimeOfArrivalUrl(query.name, query.city), fetchData);
  const { data: displayStopOfRouteData, error: displayStopOfRouteError } =
    useSWR(displayStopOfRoute(query.name, query.city), fetchData);
  const { data: realTimeNearStopData, error: realTimeNearStopError } = useSWR(
    RealTimeNearStop(query.name, query.city),
    fetchData
  );
  const {data: vehicleData, error: vehicleError } = useSWR(Vehicle(query.city), fetchData);



  const [roundTrip, setRoundTrip] = useState("to");

  const [result, setResult] = useState([]);

  const [pageSwitch, setPageSwitch] = useState('dynamic');

  const calcResult = () => {
    let resultArr = [];
    realTimeNearStopData !== undefined
      ? realTimeNearStopData !== undefined
        ? (resultArr = realTimeFrequencyData.map((item, idx) =>
            Object.assign({}, item, realTimeNearStopData[idx])
          ))
        : null
      : null;
    setResult(resultArr);
  };

  useEffect(() => {
    calcResult();
  }, [realTimeNearStopData]);

  const handleRoundTrip = (e) => {
    setRoundTrip(e);
  };

  return (
    <main className="bg-gray-light min-h-screen pb-7.5">
      <div className="bg-primary rounded-b-2xl mb-7.5">
        <div className="container mx-auto py-4 px-7.5">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-primary bg-blue rounded-2xl px-2 mb-2 inline-block">
                {query.cityName}
              </span>
              <h1 className="text-white font-bold text-h3">{query.name}</h1>
            </div>
            <div className="flex items-center ">
              <button type="button" className="px-2 pt-2">
                <Stop className="fill-current text-white" />
              </button>
              <button type="button" className="px-2 pt-2">
                <Info className="fill-current text-white" />
              </button>
              <button type="button" className="px-2 pt-2">
                <Map className="fill-current text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      { pageSwitch === 'dynamic' ? (
      <DynamicBusState
        query={query}
        displayStopOfRouteData={displayStopOfRouteData}
        roundTrip={roundTrip}
        result={result}
        handleRoundTrip={handleRoundTrip}
        ></DynamicBusState>
      ) : null
      }
      <BusInformation />
    </main>
  );
};

export default Detail;
