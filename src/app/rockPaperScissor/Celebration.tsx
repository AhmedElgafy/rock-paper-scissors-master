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

export default Celebration;
