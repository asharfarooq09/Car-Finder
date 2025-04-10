import React, { useState, useEffect, useCallback } from "react";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import {
  getBrands,
  getFuelTypes,
  getPriceRange,
  getSeatingCapacities,
} from "../services/carService";

const SearchFilters = ({ onFilterChange, initialFilters }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [brands, setBrands] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [seatingCapacities, setSeatingCapacities] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    brand: "All",
    minPrice: 0,
    maxPrice: 100000,
    fuelType: "All",
    seatingCapacity: "All",
    ...initialFilters,
  });

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  useEffect(() => {
    setBrands(["All", ...getBrands()]);
    setFuelTypes(["All", ...getFuelTypes()]);
    setSeatingCapacities(["All", ...getSeatingCapacities().map(String)]);

    const range = getPriceRange();
    setPriceRange(range);

    if (!initialFilters?.minPrice) {
      setFilters((prev) => ({ ...prev, minPrice: range.min }));
    }

    if (!initialFilters?.maxPrice) {
      setFilters((prev) => ({ ...prev, maxPrice: range.max }));
    }
  }, [initialFilters]);

  const debouncedFilterChange = useCallback(
    debounce((newFilters) => {
      onFilterChange(newFilters);
    }, 300),
    [onFilterChange]
  );

  const handleFilterChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    debouncedFilterChange(newFilters);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="bg-card rounded-lg shadow-md p-4 mb-6">
      <div className="relative mb-4">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by brand or model..."
          className="filter-input pl-10 text-foreground"
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>

      <button
        className="md:hidden w-full flex items-center justify-between bg-secondary p-2 rounded-md mb-4"
        onClick={toggleFilters}
      >
        <div className="flex items-center">
          <Filter size={18} className="mr-2" />
          <span>Filters</span>
        </div>
        {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      <div className={`${showFilters ? "block" : "hidden"} md:block space-y-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Brand
            </label>
            <select
              className="filter-input"
              value={filters.brand}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Min Price: ${filters.minPrice?.toLocaleString()}
            </label>
            <input
              type="range"
              className="w-full"
              min={priceRange.min}
              max={priceRange.max}
              step={1000}
              value={filters.minPrice || priceRange.min}
              onChange={(e) =>
                handleFilterChange("minPrice", parseInt(e.target.value))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Max Price: ${filters.maxPrice?.toLocaleString()}
            </label>
            <input
              type="range"
              className="w-full"
              min={priceRange.min}
              max={priceRange.max}
              step={1000}
              value={filters.maxPrice || priceRange.max}
              onChange={(e) =>
                handleFilterChange("maxPrice", parseInt(e.target.value))
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Fuel Type
            </label>
            <select
              className="filter-input"
              value={filters.fuelType}
              onChange={(e) => handleFilterChange("fuelType", e.target.value)}
            >
              {fuelTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Seating Capacity
            </label>
            <select
              className="filter-input"
              value={filters.seatingCapacity}
              onChange={(e) =>
                handleFilterChange("seatingCapacity", e.target.value)
              }
            >
              {seatingCapacities.map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity === "All" ? "All" : `${capacity} seats`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
