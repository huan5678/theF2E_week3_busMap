import { LR } from '../components/icons';
import Link from "next/link";
const ResultCard = ({ props }) => {
  console.log(props);
  if (props.length === 0) {
    return (
      <ul>
      </ul>
    );
  } else {
    if (props[0].target === "Route") {
      return props.map((bus) => (
        <ul
          className="space-y-4 mb-4 md:space-y-0 md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-4 md:gap-y-5"
          key={bus.RouteUID}
        >
          <Link
            href={{
              pathname: `/detail`,
              query: {
                target: props[0].target,
                bus: bus.RouteUID,
                name: bus.RouteName.Zh_tw,
                city: props[0].City,
                cityName: props[0].city,
                startStop: bus.DepartureStopNameZh,
                endStop: bus.DestinationStopNameZh,
              },
            }}
          >
            <li className="rounded-2xl bg-primary p-4 md:w-1/3 xl:w-1/4 flex-auto">
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-white font-bold">{bus.RouteName.Zh_tw}</h2>
                <span className="text-primary bg-blue rounded-2xl px-2">
                  {bus.city}
                </span>
              </div>
              <p className="text-yellow flex items-center">
                {bus.DepartureStopNameZh}
                <LR className="fill-current text-yellow mx-2" />
                {bus.DestinationStopNameZh}
              </p>
            </li>
          </Link>
        </ul>
      ));
     }
    else {
      return props.map((stop) => (
        <div key={stop.StopUID}>
          <h2 className="text-primary text-center text-2xl mb-2">
            {stop.StationAddress}
          </h2>
          <ul className="space-y-4 mb-4 md:space-y-0 md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-4 md:gap-y-5">
            {stop.Stops !== undefined
              ? stop.Stops.map((props) => (
                  <li
                    className="rounded-2xl bg-primary p-4 md:w-1/3 xl:w-1/4 flex-auto"
                    key={props.StopUID}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h2 className="text-white font-bold">
                        {props.StopName.Zh_tw}
                      </h2>
                      <span className="text-primary bg-blue rounded-2xl px-2">
                        {stop.city}
                      </span>
                    </div>
                    <p className="text-yellow">{props.RouteName.Zh_tw}</p>
                  </li>
                ))
              : null}
          </ul>
        </div>
      ));
    }
  }
};
export default ResultCard