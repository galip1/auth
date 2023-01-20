import React from "react";
import HomePage from "./pages/home-page";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}

export default App;
