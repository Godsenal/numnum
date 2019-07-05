import React from "react";
import { Math, Date, Year, Trivia } from "./tabs";
import StoreProvider from "./StoreProvider";

function App() {
  return (
    <StoreProvider>
      <section className="section is-medium is-bold">
        <div className="hero-head">
          <div className="container">
            <h1 className="title is-1 is-spaced">NumNum</h1>
            <h3 className="subtitle is-3 is-spaced">Number Facts</h3>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div>
              <div className="columns">
                <div className="column">
                  <div className="box">
                    <Math />
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <Date />
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <Year />
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <Trivia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StoreProvider>
  );
}

export default App;
