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
            props.roundTrip === 0
              ? "bg-primary text-white"
              : "bg-gray-dark text-black"
          } rounded-2xl grid place-content-center w-1/2`}
          onClick={() => props.handleRoundTrip(0)}
        >
          {props.query.startStop}
        </button>
        <LR className="fill-current text-gray-dark" />
        <button
          type="button"
          className={`py-2 ${
            props.roundTrip === 1
              ? "bg-primary text-white"
              : "bg-gray-dark text-black"
          } rounded-2xl grid place-content-center w-1/2`}
          onClick={(e) => props.handleRoundTrip(1)}
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

  const { data: operatorData, error: operatorError } = useSWR(Operator(query.city), fetchData);
  
  const { data: scheduleData, error: scheduleError } = useSWR(Schedule(query.name, query.city), fetchData);

  const [operatorInfo, setOperatorInfo] = useState({});

  const [frequency, setFrequency] = useState({
    NormalPeakMaxHeadwayMins: 0,
    NormalPeakMinHeadwayMins: 0,
    NormalPeakOffMaxHeadwayMins: 0,
    NormalPeakOffMinHeadwayMins: 0,
    HolidayPeakMaxHeadwayMins: 0,
    HolidayPeakMinHeadwayMins: 0,
    HolidayPeakOffMaxHeadwayMins: 0,
    HolidayPeakOffMinHeadwayMins: 0,
  });

  const calcFrequency = () => {
    let frequencyNormalMaxHeadwayMins = [];
    let frequencyNormalMinHeadwayMins = [];
    let frequencyHolidayMaxHeadwayMins = [];
    let frequencyHolidayMinHeadwayMins = [];

    if (scheduleData === undefined || scheduleData[0].Frequencys === undefined) {
      return;
    } else {
      scheduleData[0].Frequencys.forEach((freq) => {
          if (
            freq.ServiceDay.Sunday !== 1 ||
            freq.ServiceDay.Saturday !== 1
          ) {
            frequencyNormalMaxHeadwayMins.push(freq.MaxHeadwayMins);
            frequencyNormalMinHeadwayMins.push(freq.MinHeadwayMins);
          } else {
            frequencyHolidayMaxHeadwayMins.push(freq.MaxHeadwayMins);
            frequencyHolidayMinHeadwayMins.push(freq.MinHeadwayMins);
          }
        });
    }

    const normalPeakMaxHeadwayMins = Math.min(...frequencyNormalMaxHeadwayMins);
    const normalPeakMinHeadwayMins = Math.min(...frequencyNormalMinHeadwayMins);
    const normalPeakOffMaxHeadwayMins = Math.max(...frequencyNormalMaxHeadwayMins);
    const normalPeakOffMinHeadwayMins = Math.max(...frequencyNormalMinHeadwayMins);

    const holidayPeakMaxHeadwayMins = Math.min(...frequencyHolidayMaxHeadwayMins);
    const holidayPeakMinHeadwayMins = Math.min(...frequencyHolidayMinHeadwayMins);
    const holidayPeakOffMaxHeadwayMins = Math.max(...frequencyHolidayMaxHeadwayMins);
    const holidayPeakOffMinHeadwayMins = Math.max(...frequencyHolidayMinHeadwayMins);


    setFrequency({
      NormalPeakMaxHeadwayMins: normalPeakMaxHeadwayMins,
      NormalPeakMinHeadwayMins: normalPeakMinHeadwayMins,
      NormalPeakOffMaxHeadwayMins: normalPeakOffMaxHeadwayMins,
      NormalPeakOffMinHeadwayMins: normalPeakOffMinHeadwayMins,
      HolidayPeakMaxHeadwayMins: holidayPeakMaxHeadwayMins,
      HolidayPeakMinHeadwayMins: holidayPeakMinHeadwayMins,
      HolidayPeakOffMaxHeadwayMins: holidayPeakOffMaxHeadwayMins,
      HolidayPeakOffMinHeadwayMins: holidayPeakOffMinHeadwayMins,
    });

  };

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
    calcFrequency();
  }, []);
  
  useEffect(() => {
    console.log(routeData);
    console.log(operatorData);
    console.log(operatorInfo);
    console.log(scheduleData);
    console.log(frequency);
  },[routeData, operatorData, scheduleData, operatorInfo]);

  return operatorInfo[0] === undefined || operatorInfo.length === 0 ? null : (
    <div className="container px-4">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <Card className="bg-white space-y-3 w-full">
          <span className="inline-block rounded-2xl bg-yellow text-primary py-1 px-3 text-h5">
            公車資訊
          </span>
          <h2 className="font-bold space-x-1">
            <span>{routeData[0].DepartureStopNameZh}</span>
            <span> - </span>
            <span>{routeData[0].DestinationStopNameZh}</span>
          </h2>
          <p className="flex gap-1">
            <Bus className="fill-current" />
            <span className="font-bold">
              {operatorInfo[0].OperatorName.Zh_tw}
            </span>
            <span>{operatorInfo[0].OperatorPhone}</span>
          </p>
        </Card>
        <Card className="bg-white space-y-3 w-full">
          <span className="inline-block rounded-2xl bg-yellow text-primary py-1 px-3 text-h5">
            票價資訊
          </span>
          <div className="flex gap-1">
            <h2 className="font-bold">收費方式：</h2>
            <span className="font-normal">
              {routeData[0].TicketPriceDescriptionZh}
            </span>
          </div>
        </Card>
        <Card className="bg-white space-y-3 w-full">
          <span className="inline-block rounded-2xl bg-yellow text-primary py-1 px-3 text-h5">
            平日發車資訊
          </span>
          <ul>
            <li className="flex gap-1">
              <span className="font-bold">首班車：</span>
              <span className="font-normal">
                {(routeData.SubRoutes[0].FirstBusTime).slice(0, 2)}:{(routeData.SubRoutes[0].FirstBusTime).slice(2, 4)}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">末班車：</span>
              <span className="font-normal">
                {(routeData.SubRoutes[0].LastBusTime).slice(0, 2)}:{(routeData.SubRoutes[0].LastBusTime).slice(2, 4)}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">尖峰班距：</span>
              <span className="font-normal"></span>
              <span className="font-normal">分</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">離峰班距：</span>
              <span className="font-normal"></span>
              <span className="font-normal">分</span>
            </li>
          </ul>
        </Card>
        <Card className="bg-white space-y-3 w-full">
          <span className="inline-block rounded-2xl bg-yellow text-primary py-1 px-3 text-h5">
            假日發車資訊
          </span>
          <ul>
            <li className="flex gap-1">
              <span className="font-bold">首班車：</span>
              <span className="font-normal">
                {(routeData.SubRoutes[0].HolidayFirstBusTime).slice(0,2)}:{(routeData.SubRoutes[0].HolidayFirstBusTime).slice(2,4)}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">末班車：</span>
              <span className="font-normal">
                {(routeData.SubRoutes[0].HolidayLastBusTime).slice(0,2)}:{(routeData.SubRoutes[0].HolidayLastBusTime).slice(2,4)}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">尖峰班距：</span>
              <span className="font-normal"></span>
              <span className="font-normal">分</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold">離峰班距：</span>
              <span className="font-normal"></span>
              <span className="font-normal">分</span>
            </li>
          </ul>
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



  const [roundTrip, setRoundTrip] = useState(1);

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
