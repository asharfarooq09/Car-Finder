import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import {
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../services/carService";

const CarCard = ({ car }) => {
  const [inWishlist, setInWishlist] = React.useState(false);

  React.useEffect(() => {
    setInWishlist(isInWishlist(car.id));

    const handleWishlistUpdate = () => {
      setInWishlist(isInWishlist(car.id));
    };

    window.addEventListener("wishlistUpdated", handleWishlistUpdate);

    return () => {
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, [car.id]);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWishlist) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car.id);
    }

    setInWishlist(!inWishlist);

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="car-card overflow-hidden">
      <div className="relative">
        <Link to={`/car/${car.id}`}>
          <img
            src={car.thumbnail || car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="car-card-image"
            loading="lazy"
          />
        </Link>
        <button
          onClick={toggleWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            inWishlist
              ? "bg-primary text-white"
              : "bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white"
          } transition-colors duration-200`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-4">
        <Link to={`/car/${car.id}`} className="block">
          <h3 className="text-lg font-bold text-foreground mb-1">
            {car.brand} {car.model}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            {car.year} • {car.fuelType}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-primary font-semibold">
              {formatPrice(car.price)}
            </span>
            <span className="text-sm text-muted-foreground">{car.mileage}</span>
          </div>

          <div className="mt-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              {car.seatingCapacity} seats
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
