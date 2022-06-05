import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../constants/api-endpoints";
import { Coin } from "../utils/types";
import http from "../utils/http";

const fetchCoins = async () => {
  const { data }: { data: Coin[] } = await http.get(API_ENDPOINTS.COINS);
  return data;
};

const useCoinsQuery = () => {
  return useQuery<Coin[], Error>([API_ENDPOINTS.COINS], fetchCoins);
};

export { useCoinsQuery, fetchCoins };
