import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { filterCars } from "../services/carService";
import CarCard from "../components/CarCard";
import SearchFilters from "../components/SearchFilters";
import Pagination from "../components/Pagination";
import SortOptions from "../components/SortOptions";
import { Grid2X2, List, Loader } from "lucide-react";

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
  });
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState(null);

  const getFiltersFromParams = () => {
    return {
      search: searchParams.get("search") || "",
      brand: searchParams.get("brand") || "All",
      minPrice: searchParams.get("minPrice")
        ? parseInt(searchParams.get("minPrice"))
        : undefined,
      maxPrice: searchParams.get("maxPrice")
        ? parseInt(searchParams.get("maxPrice"))
        : undefined,
      fuelType: searchParams.get("fuelType") || "All",
      seatingCapacity: searchParams.get("seatingCapacity") || "All",
    };
  };

  const initialPage = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;

  useEffect(() => {
    setLoading(true);

    const filters = getFiltersFromParams();
    const page = searchParams.get("page")
      ? parseInt(searchParams.get("page"))
      : 1;
    const sort = searchParams.get("sort") || null;

    setTimeout(() => {
      const result = filterCars(filters, page, 10, sort);
      setCars(result.cars);
      setPagination({
        currentPage: result.pagination.currentPage,
        totalPages: result.pagination.totalPages,
        totalResults: result.pagination.totalResults,
      });
      setLoading(false);
    }, 500);
  }, [searchParams]);

  const handleFilterChange = (newFilters) => {
    const newParams = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== "All" && value !== "") {
        newParams.set(key, value);
      }
    });

    if (sortOrder) {
      newParams.set("sort", sortOrder);
    }

    newParams.set("page", "1");

    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);

    if (newSortOrder) {
      searchParams.set("sort", newSortOrder);
    } else {
      searchParams.delete("sort");
    }

    setSearchParams(searchParams);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem("carFinderViewMode", mode);
  };

  useEffect(() => {
    const savedViewMode = localStorage.getItem("carFinderViewMode");
    if (savedViewMode) {
      setViewMode(savedViewMode);
    }
  }, []);

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    if (sortParam) {
      setSortOrder(sortParam);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Browse Cars</h1>

      <SearchFilters
        onFilterChange={handleFilterChange}
        initialFilters={getFiltersFromParams()}
      />

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="mb-4 sm:mb-0">
          <p className="text-muted-foreground">
            {loading ? "Loading..." : `${pagination.totalResults} cars found`}
          </p>
        </div>

        <div className="flex space-x-4 justify-between items-center">
          <SortOptions
            onSortChange={handleSortChange}
            currentSort={sortOrder}
          />

          <div className="flex bg-secondary rounded-md overflow-hidden max-[600px]:hidden">
            <button
              className={`p-2 ${
                viewMode === "grid"
                  ? "bg-primary text-white"
                  : "text-foreground"
              }`}
              onClick={() => toggleViewMode("grid")}
              aria-label="Grid view"
            >
              <Grid2X2 size={20} />
            </button>
            <button
              className={`p-2 ${
                viewMode === "list"
                  ? "bg-primary text-white"
                  : "text-foreground"
              }`}
              onClick={() => toggleViewMode("list")}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader className="h-10 w-10 text-primary animate-spin" />
        </div>
      ) : (
        <>
          {cars.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-foreground">
                No cars found
              </h2>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more results.
              </p>
            </div>
          ) : (
            <>
              <div
                className={`
                ${
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                }
              `}
              >
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className={viewMode === "list" ? "animate-fade-in" : ""}
                  >
                    <CarCard car={car} />
                  </div>
                ))}
              </div>

              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cars;
