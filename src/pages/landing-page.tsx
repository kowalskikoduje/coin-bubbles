import React from "react";
import Loader from "../components/loader";
import Container from "../containers/container";
import { useCoinsQuery } from "../framework/get-coins";

export default function LandingPage() {
  const { error, data, isLoading } = useCoinsQuery();

  return (
    <section className="text-gray-600 body-font overflow-hidden ">
      <div className="max-w-5xl pt-40 pb-24 mx-auto text-center">
        <h2 className="mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Cryptocurrencies available
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Just choose a cryptocurrency to check out its latest technical
          analysis!
        </p>
        {isLoading ? <Loader /> : <Container error={!!error} data={data} />}
      </div>
    </section>
  );
}
