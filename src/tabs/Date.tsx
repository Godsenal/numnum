import React, { useMemo } from "react";
import { observer } from "mobx-react";
import { Select } from "../components";
import { useStore } from "../hooks";

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { status, query } = store.date;
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
      <div className="columns">
        <div className="column">
          <div className="is-inline-block">
            <Select
              options={months}
              label="Month"
              onChange={onChange("month")}
              value={query.month}
            />
          </div>
          <div className="is-inline-block">
            <Select
              options={days}
              label="Day"
              onChange={onChange("day")}
              value={query.day}
            />
          </div>
          <div className="is-inline-block">
            <label className="label"></label>
            <button
              className={`button ${isLoading && `is-loading`}`}
              onClick={onSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Math;
