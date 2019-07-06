import React from "react";
import { observer } from "mobx-react";
import { Search } from "../components";
import { useStore } from "../hooks";

const Trivia: React.SFC = observer(() => {
  const store = useStore();
  const { status } = store.trivia;

  const isLoading = status === "FETCHING";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.trivia.setQuery(e.target.value);
  };
  const onSearch = () => {
    store.trivia.fetchFact();
  };
  return (
    <div>
      <Search
        placeholder="Search number..."
        isLoading={isLoading}
        onSearch={onSearch}
        onChange={onChange}
        label="Trivia"
        value={store.trivia.query}
      />
    </div>
  );
});

export default Trivia;
