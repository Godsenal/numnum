import React, { useMemo } from "react";
import { observer } from "mobx-react";
import { Select } from "../components";
import { useStore } from "../hooks";

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { status, query } = store.year;
  const isLoading = status === "FETCHING";

  const years = useMemo(
    () => [...Array(new Date().getFullYear())].map((_, i) => String(i + 1)),
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    store.year.setQuery(e.target.value);
  };
  const onSearch = () => {
    store.year.fetchFact();
  };
  return (
    <div>
      <div className="is-inline-block">
        <Select
          options={years}
          label="Year"
          onChange={onChange}
          value={query}
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
  );
});

export default Math;
