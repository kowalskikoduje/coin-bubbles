import React from "react";
import { Coin } from "../utils/types";
import Card from "../components/card";
import ErrorInfo from "./error-info";

interface Props {
  error: boolean;
  data: Coin[] | undefined;
}

export default function Container({ error, data }: Props) {
  return error ? (
    <ErrorInfo />
  ) : (
    <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
      {data?.map((item: Coin) => (
        <Card data={item} key={item.symbol} />
      ))}
    </div>
  );
}
