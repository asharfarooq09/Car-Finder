import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CarFront, Search, Heart, Settings } from "lucide-react";
import { getBrands, getFuelTypes } from "../services/carService";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [brands, setBrands] = React.useState([]);
  const [fuelTypes, setFuelTypes] = React.useState([]);

  React.useEffect(() => {
    setBrands(getBrands());
    setFuelTypes(getFuelTypes());
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/cars?search=${searchTerm}`);
  };

  const handleBrandClick = (brand) => {
    navigate(`/cars?brand=${brand}`);
  };

  const featuredBrands = brands.slice(0, 6);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 pt-20 md:pt-32 pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Find Your Perfect Car Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in">
              Search from thousands of cars based on your preferences and budget
            </p>

            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 animate-fade-in"
            >
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search by brand or model..."
                  className="w-full py-3 pl-10 pr-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-6 bg-primary hover:bg-primary/90 transition-colors rounded-lg font-medium"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex justify-center">
              <Link
                to="/cars"
                className="text-blue-300 hover:text-white underline transition-colors"
              >
                Advanced Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose CarFinder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Advanced Search
              </h3>
              <p className="text-muted-foreground">
                Filter by brand, price range, fuel type, and seating capacity to
                find exactly what you need.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Save Favorites
              </h3>
              <p className="text-muted-foreground">
                Add cars to your wishlist to compare later or keep track of the
                ones you're interested in.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
              <Settings className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Detailed Specs
              </h3>
              <p className="text-muted-foreground">
                Get comprehensive information about each vehicle, from
                performance to features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Popular Brands
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {featuredBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandClick(brand)}
                className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <CarFront className="h-10 w-10 text-primary mb-3" />
                <span className="font-medium text-foreground">{brand}</span>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/cars"
              className="inline-flex items-center justify-center h-10 px-6 font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 container-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Browse by Fuel Type
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fuelTypes.map((fuelType) => (
              <Link
                key={fuelType}
                to={`/cars?fuelType=${fuelType}`}
                className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-foreground">
                  {fuelType} Vehicles
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of vehicles and find the perfect
            match for your needs and budget.
          </p>
          <Link
            to="/cars"
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-white text-blue-700 rounded-md hover:bg-gray-100 transition-colors"
          >
            Start Browsing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
