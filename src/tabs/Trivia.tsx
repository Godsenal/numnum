import React from "react";
import { observer } from "mobx-react";
import { Search, FactTitle } from "../components";
import { useStore } from "../hooks";

const Trivia: React.SFC = observer(() => {
  const store = useStore();
  const { text, status, found } = store.trivia;

  const isLoading = status === "FETCHING";
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.trivia.setQuery(e.target.value);
  };
  const onSearch = () => {
    store.trivia.fetchFact();
  };
  return (
    <div>
      <FactTitle>Trivia</FactTitle>
      <Search
        placeholder="Search number..."
        isLoading={isLoading}
        onSearch={onSearch}
        onChange={onChange}
        value={store.trivia.query}
      />
      <div className="content">{found && <blockquote>{text}</blockquote>}</div>
    </div>
  );
});

export default Trivia;
