import React, { useState } from "react";
import { Math, Date, Year, Trivia, Result } from "./tabs";
import StoreProvider from "./StoreProvider";
import { NumFactType } from "./models/numfact";
import { FACT_TYPES } from "./constants";

const TAB_COMP = {
  math: Math,
  date: Date,
  year: Year,
  trivia: Trivia,
  result: Result,
}
function App() {
  const [tab, setTab] = useState<NumFactType>("math");
  const CurrentTab = TAB_COMP[tab];
  return (
    <StoreProvider>
      <section className="section is-medium is-bold">

        <div className="columns is-desktop">
          <div className="column is-half is-offset-one-quarter">
            <div className="hero-head">
              <div className="container columns is-vcentered is-desktop">
                <div className="column">
                  <h1 className="title is-1 is-spaced">NumNum</h1>
                  <h3 className="subtitle is-3 is-spaced">Number Facts</h3>
                </div>
                <div className="column">
                  <div className="tabs is-toggle is-toggle-rounded">
                    <ul>
                      {FACT_TYPES.map(tabItem => (
                        <li className={tab === tabItem ? 'is-active' : ''} key={tabItem} >
                          <a onClick={() => setTab(tabItem)}>{tabItem}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {<CurrentTab />}
                </div>
              </div>
            </div>
            <div className="hero-body">
              <Result />
            </div>
          </div>
        </div>
      </section>
    </StoreProvider>
  );
}

export default App;
