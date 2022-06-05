import { useQuery } from "react-query";
import { API_ENDPOINTS } from "../constants/api-endpoints";
import { Recommendation } from "../utils/types";
import http from "../utils/http";

const fetchRecommendations = async (symbol: string) => {
  const { data }: { data: Recommendation } = await http.get(
    `${API_ENDPOINTS.RECOMMENDATIONS}/${symbol}`
  );
  return data;
};

const useRecommendationsQuery = (symbol: string) => {
  return useQuery<Recommendation, Error>(
    [API_ENDPOINTS.RECOMMENDATIONS, symbol],
    () => fetchRecommendations(symbol)
  );
};

export { useRecommendationsQuery, fetchRecommendations };
