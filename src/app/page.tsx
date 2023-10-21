"use client";
import Header from "./rockPaperScissor/page";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function Home() {
  return (
    <main className="h-screen w-[80%] mx-auto  flex justify-center items-center ">
      <Provider store={store}>
        <Header />,
      </Provider>
    </main>
  );
}
