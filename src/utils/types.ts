export type Coin = {
  symbol: string;
  name: string;
  reddit_topic: string;
  google_trends: string;
};

interface Strategy {
  [key: string]: {
    data: string;
    description: string;
  };
}

export type Recommendation = {
  success: boolean;
  price_btc: number;
  sentiment: number;
  recommendation: string;
  description: string;
  strategies: Strategy;
};
