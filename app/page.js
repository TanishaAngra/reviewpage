"use client";

import Navbar from "@/components/navbar";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Body />
        <Footer />
      </Provider>
    </>
  );
}
