import React from "react";
import { observer } from "mobx-react";
import { Search } from "../components";
import { useStore } from "../hooks";

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { status } = store.math;

  const isLoading = status === "FETCHING";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.math.setQuery(String(e.target.value));
  };
  const onSearch = () => {
    store.math.fetchFact();
  };
  return (
    <div>
      <Search
        type="number"
        placeholder="Search number..."
        isLoading={isLoading}
        onSearch={onSearch}
        onChange={onChange}
        label="Math"
        value={store.math.query}
      />
    </div>
  );
});

export default Math;
