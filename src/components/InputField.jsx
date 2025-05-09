import React from "react";

function InputField({ label, type, name, value, onChange, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-black-250 font-manrope">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full rounded-xl border border-gray-250 p-4 text-base placeholder:text-gray-350 placeholder:text-sm placeholder:font-medium focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;