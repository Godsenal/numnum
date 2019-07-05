import React from "react";
import { Math } from "./tabs";
import StoreProvider from "./StoreProvider";

function App() {
  return (
    <StoreProvider>
      <section className="hero">
        <div className="container">
          <h1 className="title is-1 is-spaced">NumNum</h1>
          <h3 className="subtitle is-3 is-spaced">Number Facts</h3>
        </div>
      </section>
      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="columns">
            <div className="column">
              <Math />
            </div>
          </div>
        </div>
      </section>
    </StoreProvider>
  );
}

export default App;
