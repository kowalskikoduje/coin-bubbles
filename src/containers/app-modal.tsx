import React, { useState, useEffect } from "react";
import Chart from "../components/chart";
import Loader from "../components/loader";
import Tooltip from "../components/tooltip";
import { useUI } from "../contexts/ui.context";
import { fetchRecommendations } from "../framework/get-recommendations";
import { Recommendation } from "../utils/types";

export default function AppModal() {
  const { displayModal, closeModal, cryptoSymbol } = useUI();
  const [data, setData] = useState<Recommendation | null>(null);

  const handleCloseModal = () => {
    setData(null);
    closeModal();
  };

  useEffect(() => {
    fetchRecommendations(cryptoSymbol).then((r) => {
      setData(r);
    });
  }, [cryptoSymbol]);

  return (
    <div
      id="large-modal"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex backdrop-blur ${
        displayModal || "hidden"
      }`}
    >
      {!data ? (
        <Loader />
      ) : (
        <div className="relative p-4 w-full max-w-4xl h-full md:h-auto mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {cryptoSymbol}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {!data.success ? (
              <div className="p-12 max-w-4xl mx-auto">
                <div
                  className="p-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
                >
                  <span className="font-medium">Not enough coin data... </span>
                  Try again later.
                </div>
              </div>
            ) : (
              <div className="p-8 max-w-4xl mx-auto fsac2">
                <div className="ktq4">
                  <h3 className="pt-3 font-semibold text-lg text-white">
                    Details
                  </h3>
                  <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                    Price: {data.price_btc} BTC
                  </p>
                  <p className="pt-2 value-text text-md text-gray-200 fkrr1 mb-3">
                    Sentiment:
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-fuchsia-800 h-2.5 rounded-full"
                      style={{ width: `${data.sentiment}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ktq4">
                  <h3 className="pt-3 font-semibold text-lg text-white">
                    Recommendation
                    <a
                      href="https://www.bitfinex.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={`${
                        data.recommendation === "sell"
                          ? "bg-red-200 hover:bg-red-300 text-red-800"
                          : "bg-green-200 hover:bg-green-300 text-green-800"
                      } text-md font-semibold mr-2 px-2.5 py-0.5 rounded float-right`}
                    >
                      {data.recommendation}
                    </a>
                  </h3>
                  <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                    {data.description}
                  </p>
                </div>
                <div className="ktq4">
                  <h3 className="pt-3 font-semibold text-lg text-white">
                    SMA
                    {data.strategies?.sma && (
                      <span className="float-right">
                        <Tooltip content={data.strategies.sma.description} />
                      </span>
                    )}
                  </h3>
                  <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                    {data.strategies?.sma && (
                      <Chart data={data.strategies.sma.data} />
                    )}
                  </p>
                </div>
                <div className="ktq4">
                  <h3 className="pt-3 font-semibold text-lg text-white">
                    RSI
                    {data.strategies?.rsi && (
                      <span className="float-right">
                        <Tooltip content={data.strategies.rsi.description} />
                      </span>
                    )}
                  </h3>
                  <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                    {data.strategies?.rsi && (
                      <Chart data={data.strategies.rsi.data} />
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
