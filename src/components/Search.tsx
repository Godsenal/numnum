import React from "react";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const Search: React.SFC<SearchProps> = ({
  onSearch,
  isLoading,
  value,
  ...props
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onSearch(String(value));
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={`control has-icons-left ${isLoading && "is-loading"}`}>
        <span className="icon is-left">
          <i className="fas fa-search" />
        </span>
        <input className={`input`} value={value} {...props} />
      </div>
    </form>
  );
};

export default Search;
