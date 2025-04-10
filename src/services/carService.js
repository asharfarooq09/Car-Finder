
const carsData = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "38 mpg",
    description: "The Toyota Camry is a mid-size car manufactured by Toyota since 1982. The Camry has been America's best-selling car for 19 years.",
    features: ["Bluetooth", "Backup Camera", "Lane Departure Warning", "Adaptive Cruise Control"],
    colors: ["White", "Black", "Silver", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2274&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    brand: "Honda",
    model: "Accord",
    year: 2023,
    price: 26500,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "40 mpg",
    description: "The Honda Accord is a series of automobiles manufactured by Honda since 1976, best known for its four-door sedan variant, which has been one of the best-selling cars in the United States since 1989.",
    features: ["Apple CarPlay", "Android Auto", "Heated Seats", "Sunroof"],
    colors: ["White", "Black", "Gray", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1630990415358-ba536be8b546?q=80&w=2273&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1630990415358-ba536be8b546?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 42000,
    fuelType: "Electric",
    seatingCapacity: 5,
    mileage: "353 miles per charge",
    description: "The Tesla Model 3 is an electric four-door sedan developed by Tesla. It is designed for electric vehicle mass market, and it was the world's best selling electric car in 2021.",
    features: ["Autopilot", "Glass Roof", "15-inch Touchscreen", "Wireless Charging"],
    colors: ["White", "Black", "Blue", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    brand: "BMW",
    model: "3 Series",
    year: 2023,
    price: 45000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "30 mpg",
    description: "The BMW 3 Series is a line of compact executive cars manufactured by the German automaker BMW since May 1975. It's BMW's best-selling model, accounting for around 30% of BMW's annual total sales.",
    features: ["Leather Seats", "Navigation System", "Heads-up Display", "Premium Sound System"],
    colors: ["Black", "White", "Blue", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 48000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "35 mpg",
    description: "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the W168 A-Class arrived in 1997.",
    features: ["MBUX Infotainment", "64-Color Ambient Lighting", "Driver Assistance Package", "Ventilated Seats"],
    colors: ["Black", "Silver", "White", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    brand: "Audi",
    model: "A4",
    year: 2023,
    price: 46000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "32 mpg",
    description: "The Audi A4 is a line of compact executive cars produced since 1994 by the German car manufacturer Audi, a subsidiary of the Volkswagen Group. The A4 has been built in five generations and is based on the Volkswagen Group B platform.",
    features: ["Virtual Cockpit", "Bang & Olufsen Sound", "Quattro All-Wheel Drive", "Matrix LED Headlights"],
    colors: ["Black", "White", "Gray", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 7,
    brand: "Lexus",
    model: "ES",
    year: 2023,
    price: 42000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "44 mpg",
    description: "The Lexus ES is a series of compact, then mid-size luxury sedans sold by Lexus since 1989. Seven generations of the sedan have been introduced to date, each offering V6 engines and a front-engine, front-wheel-drive layout.",
    features: ["Mark Levinson Audio", "Power Rear Sunshade", "Panoramic Roof", "Leather Interior"],
    colors: ["White", "Black", "Silver", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1632245889029-e406faaa34bc?q=80&w=2160&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1632245889029-e406faaa34bc?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 8,
    brand: "Volvo",
    model: "S60",
    year: 2023,
    price: 41000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "38 mpg",
    description: "The Volvo S60 is a compact luxury sedan manufactured and marketed by Volvo since 2000. It is currently in its third generation. The first generation was launched in autumn of 2000 to replace the S70.",
    features: ["City Safety", "Pilot Assist", "Harman Kardon Audio", "Heated Steering Wheel"],
    colors: ["White", "Black", "Gray", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1626072778346-0ab6604d49a7?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1626072778346-0ab6604d49a7?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 9,
    brand: "Hyundai",
    model: "Sonata",
    year: 2023,
    price: 27000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "47 mpg",
    description: "The Hyundai Sonata is a mid-size car produced by the South Korean manufacturer Hyundai since 1985. The Sonata has been in production for eight generations and is regarded as the company's flagship model.",
    features: ["Digital Key", "Remote Smart Parking Assist", "Bose Premium Audio", "Heated & Ventilated Seats"],
    colors: ["White", "Black", "Silver", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1626072952566-8ad499e2c77e?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1626072952566-8ad499e2c77e?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 10,
    brand: "Mazda",
    model: "Mazda6",
    year: 2023,
    price: 25000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "35 mpg",
    description: "The Mazda6 is a mid-size sedan produced by Mazda. The Mazda6 has been Mazda's flagship car since 2002, serving as the spiritual successor to the Mazda 626 and Capella.",
    features: ["MAZDA CONNECT", "Bose Audio System", "Radar Cruise Control", "Lane-Keep Assist"],
    colors: ["Red", "White", "Black", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2274&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 11,
    brand: "Subaru",
    model: "Legacy",
    year: 2023,
    price: 28000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "32 mpg",
    description: "The Subaru Legacy is a mid-size sedan manufactured by Subaru. It's known for its standard all-wheel drive and boxer engine, which makes it popular in regions with snowy weather.",
    features: ["Symmetrical All-Wheel Drive", "EyeSight Driver Assist", "DriverFocus", "11.6-inch Touchscreen"],
    colors: ["Blue", "White", "Black", "Silver"],
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2274&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 12,
    brand: "Kia",
    model: "K5",
    year: 2023,
    price: 26000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "33 mpg",
    description: "The Kia K5 is a mid-size car manufactured by Kia Motors since 2000. It replaced the Credos/Clarus (in South Korea) and is positioned between the Forte/Cerato and the Cadenza/K7.",
    features: ["UVO Link", "Smart Trunk", "Wireless Phone Charger", "Blind-Spot View Monitor"],
    colors: ["Gray", "White", "Black", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1616790037976-4637686d92e4?q=80&w=2274&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1616790037976-4637686d92e4?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 13,
    brand: "Nissan",
    model: "Altima",
    year: 2023,
    price: 25500,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "32 mpg",
    description: "The Nissan Altima is a mid-size car manufactured by Nissan since 1992. It's Nissan's popular entry in the mid-size sedan segment and offers a balance of performance, comfort, and fuel economy.",
    features: ["ProPILOT Assist", "Intelligent All-Wheel Drive", "Nissan Connect", "Zero Gravity Seats"],
    colors: ["White", "Black", "Gray", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 14,
    brand: "Chevrolet",
    model: "Malibu",
    year: 2023,
    price: 24000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "33 mpg",
    description: "The Chevrolet Malibu is a mid-size car manufactured and marketed by Chevrolet from 1964 to 1983 and since 1997. It's a popular American sedan known for its comfortable ride and value for money.",
    features: ["Chevrolet Infotainment System", "Teen Driver Technology", "Automatic Emergency Braking", "Rear Vision Camera"],
    colors: ["Red", "White", "Black", "Silver"],
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 15,
    brand: "Ford",
    model: "Fusion",
    year: 2023,
    price: 24500,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    mileage: "42 mpg",
    description: "The Ford Fusion is a four-door, five-passenger mid-size sedan manufactured and marketed by the Ford Motor Company. Introduced for the 2006 model year, it has been produced in gasoline, gas/electric hybrid, and gas/plug-in electric hybrid variants.",
    features: ["SYNC 3", "Co-Pilot360", "B&O Sound System", "Adaptive Cruise Control"],
    colors: ["Blue", "White", "Black", "Silver"],
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 16,
    brand: "Volkswagen",
    model: "Passat",
    year: 2023,
    price: 28000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "34 mpg",
    description: "The Volkswagen Passat is a large family car manufactured by the German automobile manufacturer Volkswagen since 1973. It has been marketed variously as the Dasher, Santana, Quantum, Magotan, Corsar and Carat.",
    features: ["App-Connect", "Digital Cockpit", "Fender Premium Audio System", "Park Distance Control"],
    colors: ["Gray", "White", "Black", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 17,
    brand: "Buick",
    model: "Regal",
    year: 2023,
    price: 32000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "30 mpg",
    description: "The Buick Regal is a mid-size car that was first introduced by Buick for the 1973 model year. It's positioned as a premium sedan in Buick's lineup, offering luxury features at a mid-level price point.",
    features: ["QuietTuning Technology", "Buick Infotainment System", "4G LTE Wi-Fi Hotspot", "Active Noise Cancellation"],
    colors: ["White", "Black", "Silver", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=2231&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 18,
    brand: "Acura",
    model: "TLX",
    year: 2023,
    price: 38000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "29 mpg",
    description: "The Acura TLX is a mid-size luxury sedan manufactured by Honda's luxury division, Acura. It replaced the TL and TSX in 2014 and combines the sporty handling of the TSX with the luxury comfort of the TL.",
    features: ["AcuraWatch", "ELS Studio 3D Premium Audio", "Head-Up Display", "Super Handling All-Wheel Drive"],
    colors: ["White", "Black", "Blue", "Red"],
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2160&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 19,
    brand: "Infiniti",
    model: "Q50",
    year: 2023,
    price: 42000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "28 mpg",
    description: "The Infiniti Q50 is a compact executive sedan that replaced the Infiniti G sedan. It's known for its powerful engine options, sporty handling, and luxurious interior.",
    features: ["InTouch Dual Display System", "Bose Performance Series Audio", "Direct Adaptive Steering", "Around View Monitor"],
    colors: ["Black", "White", "Red", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=2340&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 20,
    brand: "Genesis",
    model: "G70",
    year: 2023,
    price: 43000,
    fuelType: "Gasoline",
    seatingCapacity: 5,
    mileage: "27 mpg",
    description: "The Genesis G70 is a compact executive sedan launched by Hyundai's luxury Genesis division. It competes with cars like the BMW 3 Series and Mercedes-Benz C-Class, offering high-end features at a competitive price.",
    features: ["Genesis Connected Services", "Lexicon Premium Audio", "Nappa Leather Seats", "Highway Driving Assist"],
    colors: ["White", "Black", "Gray", "Blue"],
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=500&auto=format&fit=crop"
  },
];

export const getBrands = () => {
  return [...new Set(carsData.map(car => car.brand))].sort();
};

export const getFuelTypes = () => {
  return [...new Set(carsData.map(car => car.fuelType))].sort();
};

export const getPriceRange = () => {
  const prices = carsData.map(car => car.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

export const getSeatingCapacities = () => {
  return [...new Set(carsData.map(car => car.seatingCapacity))].sort((a, b) => a - b);
};

export const filterCars = (filters, page = 1, limit = 10, sortOrder = null) => {
  const { search, brand, minPrice, maxPrice, fuelType, seatingCapacity } = filters;
  
  let filteredCars = [...carsData];
  
  if (search) {
    const searchLower = search.toLowerCase();
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase().includes(searchLower) || 
      car.model.toLowerCase().includes(searchLower)
    );
  }
  
  if (brand && brand !== 'All') {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  }
  
  if (minPrice !== undefined) {
    filteredCars = filteredCars.filter(car => car.price >= minPrice);
  }
  
  if (maxPrice !== undefined) {
    filteredCars = filteredCars.filter(car => car.price <= maxPrice);
  }
  
  if (fuelType && fuelType !== 'All') {
    filteredCars = filteredCars.filter(car => car.fuelType === fuelType);
  }
  
  if (seatingCapacity && seatingCapacity !== 'All') {
    filteredCars = filteredCars.filter(car => car.seatingCapacity === parseInt(seatingCapacity));
  }
  
  if (sortOrder === 'lowToHigh') {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredCars.sort((a, b) => b.price - a.price);
  }
  
  const totalResults = filteredCars.length;
  const totalPages = Math.ceil(totalResults / limit);
  const offset = (page - 1) * limit;
  const paginatedCars = filteredCars.slice(offset, offset + limit);
  
  return {
    cars: paginatedCars,
    pagination: {
      totalResults,
      totalPages,
      currentPage: page,
      limit
    }
  };
};

export const getCarById = (id) => {
  return carsData.find(car => car.id === parseInt(id)) || null;
};

export const getWishlist = () => {
  const wishlist = localStorage.getItem('carFinderWishlist');
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (carId) => {
  const wishlist = getWishlist();
  if (!wishlist.includes(carId)) {
    wishlist.push(carId);
    localStorage.setItem('carFinderWishlist', JSON.stringify(wishlist));
  }
  return wishlist;
};

export const removeFromWishlist = (carId) => {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(id => id !== carId);
  localStorage.setItem('carFinderWishlist', JSON.stringify(wishlist));
  return wishlist;
};

export const getWishlistCars = () => {
  const wishlistIds = getWishlist();
  return carsData.filter(car => wishlistIds.includes(car.id));
};

export const isInWishlist = (carId) => {
  const wishlist = getWishlist();
  return wishlist.includes(carId);
};
