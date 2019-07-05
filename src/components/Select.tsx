import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
}
const Select: React.SFC<SelectProps> = ({ label, options, ...props }) => {
  return (
    <>
      {label && (
        <label className="label" htmlFor={label}>
          {label}
        </label>
      )}
      <div className="select">
        <select id={label} {...props}>
          <option disabled value="">
            Select Month
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
