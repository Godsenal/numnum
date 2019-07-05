import React, { useMemo } from "react";
import { observer } from "mobx-react";
import { Select, FactTitle } from "../components";
import { useStore } from "../hooks";

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { text, status, found, query } = store.date;
  const isLoading = status === "FETCHING";

  const months = useMemo(() => [...Array(12)].map((_, i) => String(i + 1)), []);
  const days = useMemo(() => [...Array(31)].map((_, i) => String(i + 1)), []);

  const onChange = (type: "month" | "day") => (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    store.date.setQuery({ ...query, [type]: e.target.value });
  };
  const onSearch = () => {
    store.date.fetchFact();
  };
  return (
    <div>
      <FactTitle>Date</FactTitle>
      <div className="columns">
        <div className="column">
          <Select
            options={months}
            label="Month"
            onChange={onChange("month")}
            value={query.month}
          />
        </div>
        <div className="column">
          <Select
            options={days}
            label="Day"
            onChange={onChange("day")}
            value={query.day}
          />
        </div>
      </div>
      <button
        className={`button ${isLoading && `is-loading`}`}
        onClick={onSearch}
      >
        Search
      </button>
      <div className="content">{found && <blockquote>{text}</blockquote>}</div>
    </div>
  );
});

export default Math;
