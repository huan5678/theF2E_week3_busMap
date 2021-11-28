import {useState} from 'react';
import dynamic from "next/dynamic";
const BG = dynamic(() => import("../components/BG"), { ssr: false });
import Card from "../components/Card";
import { Search,Setting } from "../components/icons"


const Navigation = () => {

  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");

  const handleStartPoint = (e) => {
  setStartPoint(e.target.value);
};
  const handleEndPoint = (e) => {
    setEndPoint(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <BG title="navigation">
      <section className="container px-4">
        <h1 className="text-primary text-center text-4xl font-bold mb-5 pt-[1.875rem]">
          轉乘規劃
        </h1>
        <Card className="shadow bg-white">
          <form className="w-full max-w-lg space-y-3 " onSubmit={handleSubmit}>
            <div className="flex items-center bg-gray-light p-4 rounded-2xl">
              <label htmlFor="startPoint" className="text-primary mr-4">
                起點
              </label>
              <input
                type="text"
                id="startPoint"
                name="startPoint"
                className="p-2 focus:outline-none bg-gray-light w-10/12"
                onChange={(e) => handleStartPoint(e)}
              />
            </div>
            <div className="flex items-center bg-gray-light p-4 rounded-2xl">
              <label htmlFor="endPoint" className="text-primary mr-4">
                終點
              </label>
              <input
                type="text"
                id="endPoint"
                name="endPoint"
                className="p-2 focus:outline-none bg-gray-light rounded-2xl w-10/12"
                onChange={(e) => handleEndPoint(e)}
              />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="date"
                className="p-2 focus:outline-none rounded-2xl bg-gray-light w-6/12"
              />
              <input
                type="time"
                className="p-2 focus:outline-none rounded-2xl bg-gray-light w-4/12"
              />
              <button className="p-2 focus:outline-none bg-gray-light rounded-2xl text-white w-2/12 grid place-content-center">
                <Setting className="fill-current text-gray-dark" />
              </button>
              <button className="p-2 focus:outline-none bg-primary rounded-2xl text-white w-2/12 grid place-content-center">
                <Search className="fill-current text-white" />
              </button>
            </div>
          </form>
        </Card>
      </section>
    </BG>
  );
};

export default Navigation;
