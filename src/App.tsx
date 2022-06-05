import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ManagedUIContext } from "./contexts/ui.context";
import LandingPage from "./pages/landing-page";
import AppModal from "./containers/app-modal";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ManagedUIContext>
        <div className="text-black bg-black">
          <Header />
          <LandingPage />
          <Footer />
        </div>
        <AppModal />
      </ManagedUIContext>
    </QueryClientProvider>
  );
}

export default App;
