import React, { useState } from "react";
import { categories, countries, cardData } from "../../assets/data/sidebardata";
import SidebarCard from "./SidebarCard";

const Sidebar = ({ onSelectCategory, onSelectCountry }) => {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-full sm:w-72 bg-white shadow-lg rounded-xl flex flex-col h-full overflow-y-auto">
      {/* Search Box */}
      <div className="sticky top-0 bg-white p-4 border-b border-gray-200 z-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search categories or countries..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="p-6 flex flex-col gap-8">
        {/* Categories */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
          <ul className="flex flex-wrap gap-3">
            {filteredCategories.map((category) => (
              <li
                key={category}
                onClick={() => onSelectCategory(category)}
                aria-label={`Select ${category}`}
                className="cursor-pointer bg-gray-100 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-all duration-200"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Countries */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Countries</h2>
          <ul className="flex flex-wrap gap-3">
            {filteredCountries.map((country) => (
              <li
                key={country.code}
                onClick={() => onSelectCountry(country.code)}
                aria-label={`Select ${country.name}`}
                className="cursor-pointer bg-gray-100 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-all duration-200"
              >
                {country.name}
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Additional Content */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Content</h2>
          <div className="flex flex-col gap-4">
            {cardData.map((card, index) => (
              <SidebarCard
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;