import dynamic from "next/dynamic";
const BG = dynamic(() => import("../components/BG"), { ssr: false });

const Station = () => {
  return (
    <BG title="station">
      <section className="container px-4">
        <h1 className="text-primary text-center text-4xl font-bold mb-5 pt-[1.875rem]">
          附近站牌
        </h1>
      </section>
    </BG>
  );
};

export default Station;
