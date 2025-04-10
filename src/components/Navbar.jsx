import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, CarFront, Menu, X, Moon, Sun } from "lucide-react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(
        localStorage.getItem("carFinderWishlist") || "[]"
      );
      setWishlistCount(wishlist.length);
    };

    updateWishlistCount();

    window.addEventListener("storage", updateWishlistCount);
    window.addEventListener("wishlistUpdated", updateWishlistCount);

    return () => {
      window.removeEventListener("storage", updateWishlistCount);
      window.removeEventListener("wishlistUpdated", updateWishlistCount);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <CarFront className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">
                CarFinder
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-foreground hover:text-primary px-3 py-2 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="text-foreground hover:text-primary px-3 py-2 transition-colors"
            >
              Browse Cars
            </Link>
            <Link
              to="/wishlist"
              className="text-foreground hover:text-primary px-3 py-2 relative transition-colors"
            >
              <div className="flex items-center">
                <Heart className="h-5 w-5" />
                <span className="ml-2">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <Link
              to="/wishlist"
              className="text-foreground hover:text-primary mr-4 relative"
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleDarkMode}
              className="mr-4 p-2 rounded-full bg-secondary hover:bg-secondary/80"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-foreground hover:text-primary"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
              onClick={toggleMobileMenu}
            >
              Browse Cars
            </Link>
            <Link
              to="/wishlist"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary"
              onClick={toggleMobileMenu}
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
