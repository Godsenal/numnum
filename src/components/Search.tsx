import React from "react";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void;
  isLoading: boolean;
  label: string;
}

const Search: React.SFC<SearchProps> = ({
  onSearch,
  isLoading,
  value,
  label,
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
      <label className="label" htmlFor={label}>{label}</label>
      <div className={`control has-icons-left ${isLoading && "is-loading"}`}>
        <span className="icon is-left">
          <i className="fas fa-search" />
        </span>
        <input id={label} className={`input`} value={value} {...props} />
      </div>
    </form>
  );
};

export default Search;
