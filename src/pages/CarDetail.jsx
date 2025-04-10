import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Heart,
  Share2,
  User,
  Fuel,
  Info,
  Loader,
  AlertCircle,
} from "lucide-react";
import {
  getCarById,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../services/carService";

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      setTimeout(() => {
        const carData = getCarById(parseInt(id));

        if (carData) {
          setCar(carData);
          setInWishlist(isInWishlist(carData.id));
        } else {
          setError("Car not found");
        }

        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to load car details");
      setLoading(false);
    }
  }, [id]);

  const toggleWishlist = () => {
    if (!car) return;

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

  const goBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${car.brand} ${car.model}`,
          text: `Check out this ${car.year} ${car.brand} ${car.model}!`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center">
        <Loader className="h-12 w-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="bg-card rounded-lg p-8 text-center max-w-lg mx-auto">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2 text-foreground">Error</h1>
          <p className="text-muted-foreground mb-6">
            {error || "Car not found"}
          </p>
          <button
            onClick={goBack}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <button
          onClick={goBack}
          className="inline-flex items-center text-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Results
        </button>
      </div>

      <div className="bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-64 sm:h-96 bg-gray-200">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={toggleWishlist}
              className={`p-3 rounded-full ${
                inWishlist
                  ? "bg-primary text-white"
                  : "bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white"
              } transition-colors shadow-md`}
              aria-label={
                inWishlist ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <Heart
                className={`h-5 w-5 ${inWishlist ? "fill-current" : ""}`}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-md"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {car.brand} {car.model}
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground">
              <span className="mr-4">{car.year}</span>
              <span className="mr-4">•</span>
              <span className="mr-4">{car.fuelType}</span>
              <span className="mr-4">•</span>
              <span>{car.mileage}</span>
            </div>
            <p className="text-2xl font-bold text-primary mt-4">
              {formatPrice(car.price)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center bg-secondary/50 p-4 rounded-lg">
              <User className="h-5 w-5 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">
                  Seating Capacity
                </p>
                <p className="font-medium text-foreground">
                  {car.seatingCapacity} seats
                </p>
              </div>
            </div>
            <div className="flex items-center bg-secondary/50 p-4 rounded-lg">
              <Fuel className="h-5 w-5 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Fuel Type</p>
                <p className="font-medium text-foreground">{car.fuelType}</p>
              </div>
            </div>
            <div className="flex items-center bg-secondary/50 p-4 rounded-lg">
              <Info className="h-5 w-5 text-primary mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Mileage</p>
                <p className="font-medium text-foreground">{car.mileage}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">
              Description
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {car.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-foreground">
              Available Colors
            </h2>
            <div className="flex flex-wrap gap-3">
              {car.colors.map((color, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className="w-5 h-5 rounded-full mr-2"
                    style={{
                      backgroundColor: color.toLowerCase(),
                      border: "1px solid #ccc",
                    }}
                  ></span>
                  <span className="text-foreground">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
