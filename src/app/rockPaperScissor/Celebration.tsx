import React from "react";
interface CelebrationProps {
  opacity: string;
  size: string;

  key: number;
}
const Celebration = ({ opacity, key, size }: CelebrationProps) => {
  return (
    <>
      <div
        key={key}
        className={`bg-white ${opacity} ${size} top-[50%] translate-y-[-50%]
             right-[50%] translate-x-[50%]
              w-96 h-96 rounded-full  absolute`}
      ></div>
      {/* <Celebration count={count--} opacity="2" size="2" /> */}
    </>
  );
};

const Celebrating = () => {
  return (
    <>
      <Celebration key={1} opacity={"opacity-[.05]"} size={"scale-[50%]"} />
      <Celebration key={2} opacity={"opacity-[.06]"} size={"scale-[60%]"} />
      <Celebration key={3} opacity={"opacity-[.07]"} size={"scale-[70%]"} />
    </>
  );
};

export default Celebrating;

// export default Celebration;
