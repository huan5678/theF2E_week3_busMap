import { useState, useEffect} from 'react';
import Card from './Card';
import { Menu2, Bus } from "./icons";

const StateCard = ( props ) => {

  // console.log(props)

  const stopSequence = (bus, stop, Direction) => {
    let result = false;
    bus.map((item) => {
      if (
        item.StopSequence === stop.StopSequence &&
        item.Direction === Direction
      ) {
        result = true;
      }
    });
    return result;
  };

  let str;

  const [wayArr , setWayArr] = useState([]);

  const [timer, setTimer] = useState(0);

  const handleTimer = () => {
    setTimeout(() => {
      setTimer(timer + 1);
    } , 60000);
  };

  useEffect(() => {
    if (props.displayStopOfRouteData !== undefined) {
      props.roundTrip === 1
        ? (setWayArr(props.displayStopOfRouteData[1].Stops))
        : (setWayArr(props.displayStopOfRouteData[0].Stops));
    }
    handleTimer();
  }, [props.roundTrip, props.displayStopOfRouteData, timer]);


  if (props !== undefined) {
    props.displayStopOfRouteData !== undefined
      ? (str = wayArr.map((item, index) => (
          <li
            key={item.StopUID}
            className="flex justify-between items-center mb-7.5"
          >
            <Card className="bg-white flex-1">
              <div className="flex justify-between items-center py-1 gap-4">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-center bg-gray-dark text-white rounded-2xl px-4 py-1 min-w-[4.5rem] flex-none">
                    未發車
                  </span>
                  <div className="flex flex-wrap gap-8 flex-auto">
                    <h2 className="font-bold">{item.StopName.Zh_tw}</h2>
                    {props.result.map((bus, index) => {
                      if (
                        bus.StopSequence === item.StopSequence &&
                        bus.Direction === props.roundTrip
                      ) {
                        return (
                          <div key={bus.PlateNumb}>
                            <div className="flex justify-end gap-1 items-center bg-primary rounded-2xl py-1 px-2 shadow">
                              <Bus className="fill-current text-white" />
                              <h3 className="text-white text-h5">
                                {bus.PlateNumb}
                              </h3>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                {stopSequence(props.result, item, props.roundTrip) ? (
                  <span className="text-center bg-primary text-white rounded-2xl px-2 py-1">
                    {item.StopSequence < 10
                      ? `0${item.StopSequence}`
                      : item.StopSequence}
                  </span>
                ) : (
                  <span className="text-center bg-gray-light text-gray-dark rounded-2xl px-2 py-1">
                    {item.StopSequence < 10
                      ? `0${item.StopSequence}`
                      : item.StopSequence}
                  </span>
                )}
              </div>
            </Card>
            <button className="px-2 py-4">
              <Menu2 className="fill-current text-gray-dark" />
            </button>
          </li>
        )))
      : null;
  }
  return <>{str}</>;
};



export default StateCard;