import React from "react";
import { observer } from "mobx-react";
import { Search, FactTitle } from "../components";
import { useStore } from "../hooks";

const Math: React.SFC = observer(() => {
  const store = useStore();
  const { text, status, found } = store.math;

  const isLoading = status === "FETCHING";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.math.setQuery(e.target.value);
  };
  const onSearch = () => {
    store.math.fetchFact();
  };
  return (
    <div>
      <FactTitle>Math</FactTitle>
      <Search
        placeholder="Search number..."
        isLoading={isLoading}
        onSearch={onSearch}
        onChange={onChange}
        value={store.math.query}
      />
      <div className="content">{found && <blockquote>{text}</blockquote>}</div>
    </div>
  );
});

export default Math;
