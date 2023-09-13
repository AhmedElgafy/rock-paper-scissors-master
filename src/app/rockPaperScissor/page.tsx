export default function Header() {
  return (
    <div>
      <h1 className=" pb-4 text-center font-BarlowSemiCondensed font-medium text-white">
        {"Choose which one do you want to play".toUpperCase()}
      </h1>
      <div className="flex gap-4 border-2 p-5 rounded-lg  items-center justify-center">
        <img className="block" src="../../logo.svg" alt="" />
        <img className="block" src="../../logo-bonus.svg" alt="" />
      </div>
    </div>
  );
}
