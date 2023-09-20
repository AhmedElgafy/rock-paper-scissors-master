"use client";
import Header from "./rockPaperScissor/page";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Provider store={store}>
        <Header />,
      </Provider>
    </main>
  );
}
