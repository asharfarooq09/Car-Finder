import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getWishlistCars } from "../services/carService";
import CarCard from "../components/CarCard";
import { Heart, Loader, ShoppingCart } from "lucide-react";

const Wishlist = () => {
  const [wishlistCars, setWishlistCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = () => {
      setLoading(true);

      setTimeout(() => {
        const cars = getWishlistCars();
        setWishlistCars(cars);
        setLoading(false);
      }, 300);
    };

    loadWishlist();

    window.addEventListener("wishlistUpdated", loadWishlist);
    window.addEventListener("storage", loadWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", loadWishlist);
      window.removeEventListener("storage", loadWishlist);
    };
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center">
        <Loader className="h-12 w-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Your Wishlist</h1>

      {wishlistCars.length === 0 ? (
        <div className="bg-card rounded-lg p-8 text-center max-w-lg mx-auto">
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            Your wishlist is empty
          </h2>
          <p className="text-muted-foreground mb-6">
            Browse our collection and add cars to your wishlist to find them
            here.
          </p>
          <Link
            to="/cars"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Browse Cars
          </Link>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground mb-6">
            You have {wishlistCars.length}{" "}
            {wishlistCars.length === 1 ? "car" : "cars"} in your wishlist.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
