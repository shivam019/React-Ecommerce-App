import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/DataContext";

const filters = [
  {
    id: "price",
    name: "price",
    options: [
      { value: "Low to High", label: "Low to High" },
      { value: "High to Low", label: "High to Low" },
    ],
  },
];

const Filter = () => {
  const { filterPrice, filterAllClear } = useContext(CartContext);

  return (
    <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
      <div className="text-left">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black  "
          onClick={() => filterAllClear()}
        >
          Clear All
        </button>
      </div>

      {filters.map((filter) => (
        <>
          <div key={filter.id} className="pt-6">
            <h3 className="text-lg font-semibold text-gray-900 text-left">
              {filter.name}
            </h3>
            <ul className="mt-2">
              {filter.options.map((option) => (
                <li
                  key={option.value}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center">
                    <input
                      id={`${filter.id}-${option.value}`}
                      name={`${filter.id}[]`}
                      defaultValue={option.value}
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      onChange={(event) => filterPrice(event.target.value)}
                    />
                    <label
                      htmlFor={`${filter.id}-${option.value}`}
                      className="ml-3 text-sm font-medium text-gray-900"
                    >
                      {option.label}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  );
};

export default Filter;
