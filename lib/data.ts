import { Data, IProductInput, IUserInput } from "@/types";
import { toSlug } from "./utils";

import bcrypt from "bcryptjs";
import { i18n } from "@/i18n-config";

const users: IUserInput[] = [
  {
    name: "John",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "Admin",
    address: {
      fullName: "John Doe",
      street: "111 Main St",
      city: "New York",
      province: "NY",
      postalCode: "10001",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Stripe",
    emailVerified: false,
  },
  {
    name: "Jane",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Jane Harris",
      street: "222 Main St",
      city: "New York",
      province: "NY",
      postalCode: "1002",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Cash On Delivery",
    emailVerified: false,
  },
  {
    name: "Jack",
    email: "jack@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Jack Ryan",
      street: "333 Main St",
      city: "New York",
      province: "NY",
      postalCode: "1003",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "PayPal",
    emailVerified: false,
  },
  {
    name: "Sarah",
    email: "sarah@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Sarah Smith",
      street: "444 Main St",
      city: "New York",
      province: "NY",
      postalCode: "1005",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Cash On Delivery",
    emailVerified: false,
  },
  {
    name: "Michael",
    email: "michael@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "John Alexander",
      street: "555 Main St",
      city: "New York",
      province: "NY",
      postalCode: "1006",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "PayPal",
    emailVerified: false,
  },
  {
    name: "Emily",
    email: "emily@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Emily Johnson",
      street: "666 Main St",
      city: "New York",
      province: "NY",
      postalCode: "10001",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Stripe",
    emailVerified: false,
  },
  {
    name: "Alice",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Alice Cooper",
      street: "777 Main St",
      city: "New York",
      province: "NY",
      postalCode: "10007",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Cash On Delivery",
    emailVerified: false,
  },
  {
    name: "Tom",
    email: "tom@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Tom Hanks",
      street: "888 Main St",
      city: "New York",
      province: "NY",
      postalCode: "10008",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Stripe",
    emailVerified: false,
  },
  {
    name: "Linda",
    email: "linda@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Linda Holmes",
      street: "999 Main St",
      city: "New York",
      province: "NY",
      postalCode: "10009",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "PayPal",
    emailVerified: false,
  },
  {
    name: "George",
    email: "george@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "George Smith",
      street: "101 First Ave",
      city: "New York",
      province: "NY",
      postalCode: "10010",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Stripe",
    emailVerified: false,
  },
  {
    name: "Jessica",
    email: "jessica@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Jessica Brown",
      street: "102 First Ave",
      city: "New York",
      province: "NY",
      postalCode: "10011",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Cash On Delivery",
    emailVerified: false,
  },
  {
    name: "Chris",
    email: "chris@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Chris Evans",
      street: "103 First Ave",
      city: "New York",
      province: "NY",
      postalCode: "10012",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "PayPal",
    emailVerified: false,
  },
  {
    name: "Samantha",
    email: "samantha@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Samantha Wilson",
      street: "104 First Ave",
      city: "New York",
      province: "NY",
      postalCode: "10013",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Stripe",
    emailVerified: false,
  },
  {
    name: "David",
    email: "david@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "David Lee",
      street: "105 First Ave",
      city: "New York",
      province: "NY",
      postalCode: "10014",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "Cash On Delivery",
    emailVerified: false,
  },
  {
    name: "Anna",
    email: "anna@example.com",
    password: bcrypt.hashSync("123456", 5),
    role: "User",
    address: {
      fullName: "Anna Smith",
      street: "106 First Ave",
      city: "New York",
      province: "NY",
      postalCode: "10015",
      country: "USA",
      phone: "123-456-7890",
    },
    paymentMethod: "PayPal",
    emailVerified: false,
  },
];

const products: IProductInput[] = [
  {
    name: "Nike Mens Slim-fit Long-Sleeve T-Shirt",
    slug: toSlug("Nike Mens Slim-fit Long-Sleeve T-Shirt"),
    category: "T-Shirts",
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: "Nike",
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      "Made with chemicals safer for human health and the environment",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Red", "Black"],

    reviews: [],
  },
  {
    name: "Jerzees Long-Sleeve Heavyweight Blend T-Shirt",
    slug: toSlug("Jerzees Long-Sleeve Heavyweight Blend T-Shirt"),
    category: "T-Shirts",
    images: [
      "/images/p12-1.jpg",
      "/images/p12-2.jpg",
      "/images/p12-3.jpg",
      "/images/p12-4.jpg",
    ],
    tags: ["featured"],
    isPublished: true,
    price: 23.78,
    listPrice: 0,
    brand: "Jerzees",
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    countInStock: 12,
    description:
      "Made with sustainably sourced USA grown cotton; Shoulder-to-shoulder tape; double-needle coverstitched front neck; Set-in sleeves; Rib cuffs with concealed seams; Seamless body for a wide printing area",

    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Yellow", "Red", "Black"],

    reviews: [],
  },
  {
    name: "Jerzees Men's Long-Sleeve T-Shirt",
    slug: toSlug("Jerzees Men Long-Sleeve T-Shirt"),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/p13-1.jpg", "/images/p13-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 13.86,
    listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    countInStock: 13,
    description:
      "The Jerzees long sleeve t-shirt is made with dri-power technology that wicks away moisture to keep you cool and dry throughout your day. We also included a rib collar and cuffs for added durability, and a lay-flat collar for comfort. If you are looking for a versatile shirt that you can wear throughout the transitioning seasons, then look no further.",
    sizes: ["XL", "XXL"],
    colors: ["Green", "White"],

    reviews: [],
  },
  {
    name: "Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts",
    slug: toSlug(
      "Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts",
    ),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/p14-1.jpg", "/images/p14-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 26.95,
    listPrice: 46.03,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 14,
    description:
      "Elevate your outfit with this soft long sleeve t shirt men. This full sleeves tee is the ultimate upgrade from your regular cotton t-shirt. ",
    sizes: ["XL", "XXL"],
    colors: ["Yellow", "White"],

    reviews: [],
  },
  {
    name: "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt",
    slug: toSlug(
      "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt",
    ),
    category: "T-Shirts",
    brand: " Muscle Cmdr",
    images: ["/images/p15-1.jpg", "/images/p15-2.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 29.99,
    listPrice: 35.99,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 15,
    description:
      "Slim Fit Design:Men's Muscle Slim Fit Button Henley Shirts are designed to fit snugly against your body, accentuating your muscles and creating a sleek silhouette that's perfect for any occasion. ",
    sizes: ["XL", "XXL"],
    colors: ["Green", "Yellow"],

    reviews: [],
  },
  {
    name: "Hanes Mens Long Sleeve Beefy Henley Shirt",
    slug: toSlug("Hanes Mens Long Sleeve Beefy Henley Shirt"),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/p16-1.jpg", "/images/p16-2.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 25.3,
    listPrice: 32.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 16,
    numSales: 56,
    description:
      "Heavyweight cotton (Heathers are 60% cotton/40% polyester; Pebblestone is 75% cotton/25% polyester)",
    sizes: ["XL", "XXL"],
    colors: ["Grey", "White"],

    reviews: [],
  },
  // Jeans
  {
    name: "Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans",
    slug: toSlug("Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans"),
    category: "Jeans",
    brand: "Silver Jeans Co",
    images: ["/images/p21-1.jpg", "/images/p21-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 54,
    numSales: 21,
    description:
      "Silver Jeans Co. Jace Slim Fit Bootcut Jeans - Consider Jace a modern cowboy jean. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)",
    slug: toSlug(
      "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)",
    ),
    category: "Jeans",
    brand: "Levi's",
    images: ["/images/p22-1.jpg", "/images/p22-2.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 59.99,
    listPrice: 69.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 22,
    numSales: 54,
    description:
      "A veritable classic, this 505 is made to have a comfortable look and style.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Essentials Mens Straight-Fit Stretch Jean",
    slug: toSlug("Essentials Mens Straight-Fit Stretch Jean"),
    category: "Jeans",
    brand: "Essentials",
    images: ["/images/p23-1.jpg", "/images/p23-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 38.9,
    listPrice: 45,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 23,
    numSales: 54,
    description:
      "These classic 5-pocket straight-fit jeans are crafted with a bit of stretch for additional comfort and to help maintain their shape",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Grey", "Blue"],

    reviews: [],
  },
  {
    name: "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans",
    slug: toSlug(
      "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans",
    ),
    category: "Jeans",
    brand: "Buffalo David Bitton",
    images: ["/images/p24-1.jpg", "/images/p24-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 69.99,
    listPrice: 100,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 24,
    numSales: 53,
    description:
      "Stretch recycled denim jeans in an authentic and sanded wash blue. Features a comfortable low-rise waist with a relaxed fit at the leg. The distressed look gives these jeans an effortlessly worn-in feel. The eco-friendly logo patch in tan and red is at the back waistband. The signature maple leaf graphic is debossed at the zip-fly.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Dickies Mens Relaxed Fit Carpenter Jean",
    slug: toSlug("Dickies Mens Relaxed Fit Carpenter Jean"),
    category: "Jeans",
    brand: "Dickies",
    images: ["/images/p25-1.jpg", "/images/p25-2.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 25,
    numSales: 48,
    description:
      "Relaxed work jean with traditional carpenter-style pockets and logo patch at back pockets",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Wrangler mens Premium Performance Cowboy Cut Slim Fit Jean",
    slug: toSlug("Wrangler mens Premium Performance Cowboy Cut Slim Fit Jean"),
    category: "Jeans",
    brand: "Wrangler",
    images: ["/images/p26-1.jpg", "/images/p26-2.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 81.78,
    listPrice: 149.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 26,
    numSales: 48,
    description:
      "Designed with a functional fit in mind, these jeans are made to stack over your favorite pair of boots. Constructed with a slim fit in the waist, seat, and thigh, this jean is made for both function and comfort for long days in the saddle.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  // Watches
  {
    name: "Seiko Men's Analogue Watch with Black Dial",
    slug: toSlug("Seiko Men's Analogue Watch with Black Dial"),
    category: "Wrist Watches",
    brand: "Seiko",
    images: ["/images/p31-1.jpg", "/images/p31-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 530.0,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 31,
    numSales: 48,
    description:
      "Casing: Case made of stainless steel Case shape: round Case colour: silver Glass: Hardlex Clasp type: Fold over clasp with safety",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch",
    slug: toSlug(
      "SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch",
    ),
    category: "Wrist Watches",
    brand: "Seiko",
    images: ["/images/p32-1.jpg", "/images/p32-2.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 375.83,
    listPrice: 400,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 32,
    numSales: 48,
    description:
      "Seiko 5 Sports Collection Inspired by vintage field/aviator style: Automatic with manual winding capability",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch ",
    slug: toSlug(
      "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch",
    ),
    category: "Wrist Watches",
    brand: "Casio",
    images: ["/images/p33-1.jpg", "/images/p33-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 60.78,
    listPrice: 0,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 33,
    numSales: 48,
    description:
      "The Casio range is growing with this model  MWA-100H-1AVEF. Sporting a stainless steel case with a brushed finish, it will easily withstand all the shocks of everyday life.",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch",
    slug: toSlug(
      "Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch",
    ),
    category: "Wrist Watches",
    brand: "Casio",
    images: ["/images/p34-1.jpg", "/images/p34-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 34.22,
    listPrice: 54.99,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 34,
    numSales: 48,
    description:
      "The new MTPVD01D-7EV is a classic 50 meter water resistant stainless steel watch now updated with a white dial. This elegant 3 hand, date display timepiece is perfect for any setting.",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    slug: toSlug("Fossil Men's Grant Stainless Steel Quartz Chronograph Watch"),
    category: "Wrist Watches",
    brand: "Fossil",
    images: ["/images/p35-1.jpg", "/images/p35-2.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 171.22,
    listPrice: 225,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 35,
    numSales: 48,
    description:
      "Chronograph watch featuring silver- and blue-tone case, blue sunray dial, and silver-tone Roman numeral indices",
    sizes: [],
    colors: ["Blue", "Black", "Sliver"],

    reviews: [],
  },
  {
    name: "Fossil Men's Machine Stainless Steel Quartz Watch",
    slug: toSlug("Fossil Men's Machine Stainless Steel Quartz Watch"),
    category: "Wrist Watches",
    brand: "Fossil",
    images: ["/images/p36-1.jpg", "/images/p36-2.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 158.21,
    listPrice: 229.0,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 36,
    numSales: 49,
    description:
      "In masculine black-on-black, our industrial-inspired Machine watch will add a fresh, modern touch to your casual look. This Machine watch also features a three hand movement on a stainless steel bracelet.",
    sizes: [],
    colors: ["Brown", "Sliver", "Black"],

    reviews: [],
  },
  // Sneakers
  {
    name: "adidas Mens Grand Court 2.0 Training Shoes Training Shoes",
    slug: toSlug("adidas Mens Grand Court 2.0 Training Shoes Training Shoes"),
    category: "Shoes",
    brand: "adidas",
    images: ["/images/p41-1.jpg", "/images/p41-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 81.99,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 41,
    numSales: 48,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10"],
    colors: ["White", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes",
    slug: toSlug(
      "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes",
    ),
    category: "Shoes",
    brand: "ziitop",
    images: ["/images/p42-1.jpg", "/images/p42-2.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 39.97,
    listPrice: 49.96,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 42,
    numSales: 50,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10"],
    colors: ["Beige", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "Skechers mens Summits High Range Hands Free Slip-in Shoes Work shoe",
    slug: toSlug(
      "Skechers mens Summits High Range Hands Free Slip-in Shoes Work shoe",
    ),
    category: "Shoes",
    brand: "Skechers",
    images: ["/images/p43-1.jpg", "/images/p43-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 99.99,
    listPrice: 0,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 43,
    numSales: 72,
    description:
      "Step into easy-wearing comfort with Skechers Hands Free Slip-ins™: Summits - High Range. Along with our Exclusive Heel Pillow™ holds your foot securely in place, this vegan style features a unique pop-up Skechers Slip-ins™ molded heel panel, a mesh upper with fixed laces",
    sizes: ["8", "9", "10"],
    colors: ["Navy", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "DLWKIPV Mens Running Shoes Tennis Cross Training Sneakers Fashion Non Slip Outdoor Walking Jogging Shoes Mesh Light Flexible Comfortable Breathable Shoes",
    slug: toSlug(
      "DLWKIPV Mens Running Shoes Tennis Cross Training Sneakers Fashion Non Slip Outdoor Walking Jogging Shoes Mesh Light Flexible Comfortable Breathable Shoes",
    ),
    category: "Shoes",
    brand: "DLWKIPV",
    images: ["/images/p44-1.jpg", "/images/p44-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 36.99,
    listPrice: 56.9,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 44,
    numSales: 72,
    description:
      "Design: Mesh vamp, ventilation. Sole anti-slip groove design, shock absorption and anti-slip. The inside of the shoe is wide and soft, bringing you a good comfortable experience",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Brown", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "ASICS Men's GT-2000 13 Running Shoes",
    slug: toSlug("ASICS Men's GT-2000 13 Running Shoes"),
    category: "Shoes",
    brand: "ASICS",
    images: ["/images/p45-1.jpg", "/images/p45-2.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 179.95,
    listPrice: 200,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 45,
    numSales: 64,
    description:
      "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions",
    sizes: ["8", "9", "10", "11"],
    colors: ["Blue", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
    slug: toSlug(
      "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
    ),
    category: "Shoes",
    brand: "Generic",
    images: ["/images/p46-1.jpg", "/images/p46-2.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 32.99,
    listPrice: 80,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 46,
    numSales: 48,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10", "11"],
    colors: ["Green", "Black", "Grey"],

    reviews: [],
  },
];

const reviews = [
  {
    rating: 1,
    title: "Poor quality",
    comment:
      "Very disappointed. The item broke after just a few uses. Not worth the money.",
  },
  {
    rating: 2,
    title: "Disappointed",
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: "Needs improvement",
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: "not bad",
    comment:
      "This product is decent, the quality is good but it could use some improvements in the details.",
  },
  {
    rating: 3,
    title: "Okay, not great",
    comment:
      "It works, but not as well as I hoped. Quality is average and lacks some finishing.",
  },
  {
    rating: 3,
    title: "Good product",
    comment:
      "This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.",
  },
  {
    rating: 4,
    title: "Pretty good",
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: "Very satisfied",
    comment:
      "Good product! High quality and worth the price. Would consider buying again.",
  },
  {
    rating: 4,
    title: "Absolutely love it!",
    comment:
      "Perfect in every way! The quality, design, and comfort exceeded all my expectations.",
  },
  {
    rating: 4,
    title: "Exceeded expectations!",
    comment:
      "Fantastic product! High quality, feels durable, and performs well. Highly recommend!",
  },
  {
    rating: 5,
    title: "Perfect purchase!",
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: "Highly recommend",
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: "Just what I needed",
    comment:
      "Exactly as described! Quality exceeded my expectations, and it arrived quickly.",
  },
  {
    rating: 5,
    title: "Excellent choice!",
    comment:
      "This product is outstanding! Everything about it feels top-notch, from material to functionality.",
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
];
const data: Data = {
  users,
  products,
  reviews,
  webPages: [
    {
      title: "About Us",
      slug: "about-us",
      content: `Welcome to NextAmazon, your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.
 
 At NextAmazon, we prioritize customer satisfaction and innovation. Our team works tirelessly to curate a diverse selection of items, from everyday essentials to exclusive deals, ensuring there's something for everyone. We also strive to make your shopping experience seamless with fast shipping, secure payments, and excellent customer support.
 
 As we continue to grow, our commitment to quality and service remains unwavering. Thank you for choosing NextAmazon—we look forward to being a part of your journey and delivering value every step of the way.`,
      isPublished: true,
    },
    {
      title: "Contact Us",
      slug: "contact-us",
      content: `We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.
 
 **Customer Support**
 For inquiries about orders, products, or account-related issues, contact our customer support team:
 - **Email:** support@example.com
 - **Phone:** +1 (123) 456-7890
 - **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).
 
 **Head Office**
 For corporate or business-related inquiries, reach out to our headquarters:
 - **Address:** 1234 E-Commerce St, Suite 567, Business City, BC 12345
 - **Phone:** +1 (987) 654-3210
 
 We look forward to assisting you! Your satisfaction is our priority.
 `,
      isPublished: true,
    },
    {
      title: "Help",
      slug: "help",
      content: `Welcome to our Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.
 
 **Placing and Managing Orders**
 Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.
 
 **Shipping and Returns**
 We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.
 
 **Account and Support**
 Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
      isPublished: true,
    },
    {
      title: "Privacy Policy",
      slug: "privacy-policy",
      content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.
 
 We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.
 
 Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
      isPublished: true,
    },
    {
      title: "Conditions of Use",
      slug: "conditions-of-use",
      content: `Welcome to NextAmazon. These Conditions of Use govern your access to and use of the NextAmazon website, services, and features. By browsing the website, creating an account, or placing an order, you agree to these conditions and our applicable policies, including our Privacy Policy, Shipping Policy, and Returns Policy.

 **1. Eligibility and Accounts**
 You must be legally able to enter into a binding agreement to make purchases on this website. If you are under the age of majority where you live, you may use the website only with the involvement and permission of a parent or legal guardian. You are responsible for keeping your account credentials confidential and for activity carried out through your account. Please keep your account information accurate and notify us if you suspect unauthorized access.

 **2. Products, Pricing, and Availability**
 We make reasonable efforts to display product descriptions, images, prices, and availability accurately. Product colors and appearance may vary depending on your device and screen settings. Products are subject to availability, and we may correct listing errors or update product information when necessary. If an error affects an order you have placed, we will contact you with the available options before proceeding where appropriate.

 **3. Orders and Payment**
 Placing an order is an offer to purchase the selected products. An order confirmation acknowledges receipt of your order and does not necessarily mean that the order has been accepted or dispatched. We reserve the right to decline or cancel an order where necessary, including in cases of suspected fraud, pricing or listing errors, or product unavailability. Available payment methods and any applicable charges are shown during checkout. You authorize the selected payment provider to process the payment for your order.

 **4. Shipping, Returns, and Refunds**
 Delivery estimates, shipping charges, and available delivery options are displayed during checkout or in our Shipping Policy. Delivery dates are estimates and may be affected by circumstances outside our control. Returns and refunds are handled according to our Returns Policy and any applicable consumer protection laws.

 **5. Acceptable Use**
 You agree not to misuse the website, interfere with its operation, attempt unauthorized access, submit fraudulent information, distribute malicious code, or use the service in a way that violates applicable laws or the rights of others.

 **6. Intellectual Property and User Content**
 Website content, including text, graphics, logos, and design elements, is owned by or licensed to NextAmazon and may not be copied, distributed, or used commercially without prior permission, except where permitted by law. You are responsible for content you submit and must have the rights necessary to share it with us.

 **7. Limitation of Liability**
 To the extent permitted by applicable law, NextAmazon is not responsible for indirect or consequential losses arising from your use of the website. Nothing in these conditions limits rights or liabilities that cannot legally be excluded. The website and its services may occasionally be unavailable for maintenance, updates, or reasons beyond our control.

 **8. Changes and Contact**
 We may update these conditions from time to time. The latest version will be published on this page, with the updated version applying from its publication date unless stated otherwise. If you have questions, please contact our customer support team through the Contact Us page.

 Please review these conditions before using the website or placing an order.`,
      isPublished: true,
    },
    {
      title: "Customer Service",
      slug: "customer-service",
      content: `At NextAmazon, our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.
 
 If you have questions or concerns, please reach out to us through our multiple contact options:
 - **Email:** support@example.com
 - **Phone:** +1 (123) 456-7890
 - **Live Chat:** Available on our website for instant assistance
 
 We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently. Thank you for choosing us!`,
      isPublished: true,
    },
    {
      title: "Returns Policy",
      slug: "returns-policy",
      content: `At NextAmazon, we want you to feel confident when shopping with us. If an item does not meet your expectations, you can request a return in accordance with the conditions below and any consumer rights that apply in your location.

 **1. Return Eligibility**
 Items may be eligible for return when they are unused, in their original condition, and include their original packaging, tags, and accessories where applicable. Some products may be non-returnable for hygiene, safety, personalization, digital-delivery, or other legal reasons. Any product-specific return restrictions will be communicated on the product page or during the purchase process.

 **2. How to Request a Return**
 1. Sign in to your NextAmazon account.
 2. Open **My Orders** and select the order containing the item.
 3. Choose the item you want to return and follow the return instructions, or contact Customer Support if the return option is unavailable.
 4. Wait for return instructions before sending the item back.

 **3. Damaged, Defective, or Incorrect Items**
 If your order arrives damaged, defective, or different from what you ordered, contact Customer Support as soon as possible. Include your order number and a description of the issue. Photos may help us assess the request and arrange an appropriate solution.

 **4. Refunds**
 Once an approved return has been received and inspected, we will notify you of the outcome. Approved refunds are generally issued to the original payment method. The time it takes for the refund to appear depends on your payment provider or bank. Any delivery charges or return costs will be handled according to the terms shown at checkout, this policy, and applicable law.

 **5. Exchanges**
 If you need a different size, color, or replacement item, contact Customer Support. Exchanges depend on product availability and may require you to return the original item and place a new order.

 **6. Important Information**
 Return eligibility, deadlines, and costs can vary by product and destination. Check the product listing and your order details for the applicable conditions. Nothing in this policy limits any mandatory rights you may have under local consumer protection laws.

 For help with a return, visit our Contact Us page and provide your order number.`,
      isPublished: true,
    },
    {
      title: "Careers",
      slug: "careers",
      content: `Build your career with NextAmazon. We are interested in people who enjoy solving problems, improving the customer experience, and helping an e-commerce business grow.

 **A collaborative place to grow**
 E-commerce brings together technology, operations, customer experience, marketing, merchandising, and logistics. Our work depends on people who are curious, dependable, open to learning, and committed to doing thoughtful work.

 **Areas of opportunity**
 Depending on our current business needs, opportunities may arise in:
 - Software engineering and technology
 - Customer support and customer experience
 - Marketing, content, and social media
 - Product merchandising and catalog management
 - Operations, fulfillment, and logistics
 - Business development and partnerships

 **How to express your interest**
 If you would like to be considered for future opportunities, contact us through the Contact Us page with the subject line **Careers at NextAmazon**. Include your resume or portfolio, the type of role you are interested in, and a short introduction. Please do not include sensitive personal information in your initial message.

 We appreciate your interest. Any application will be reviewed according to our hiring needs, and contacting us does not guarantee an interview or offer.`,
      isPublished: true,
    },
    {
      title: "Blog",
      slug: "blog",
      content: `Welcome to the NextAmazon Blog, a place for useful ideas and updates to help you make informed shopping decisions.

 Explore articles covering product guides, buying advice, practical tips, new arrivals, seasonal inspiration, and updates from the world of online shopping. Our goal is to make it easier to compare options, understand product features, and get more value from the things you buy.

 **What you can expect**
 - **Buying guides:** Helpful points to consider before choosing a product.
 - **Product tips:** Ideas for using, caring for, and getting the most from your purchases.
 - **Shopping inspiration:** Suggestions for gifts, everyday essentials, and seasonal needs.
 - **Store updates:** News about NextAmazon services, featured collections, and promotions.

 Articles are provided for general information. Product availability, specifications, and prices can change, so always check the current product page before making a purchase.

 Check back for new articles and shopping inspiration from NextAmazon.`,
      isPublished: true,
    },
    {
      title: "Sell Products",
      slug: "sell",
      content: `Reach customers and grow your business by selling through NextAmazon. We welcome businesses and sellers who can offer genuine products, reliable service, and accurate product information.

 **Why sell on NextAmazon?**
 - Present your products to customers browsing our online store.
 - Manage product information and keep listings up to date.
 - Receive order information through the seller tools made available to approved sellers.
 - Build customer trust through accurate descriptions and dependable fulfillment.

 **Getting started**
 1. Contact our team through the Contact Us page and tell us about your business and product range.
 2. Provide your business details and any information needed to review your products.
 3. Our team will explain the onboarding process, seller requirements, applicable fees, and available tools.
 4. Once approved, follow the instructions provided to create and manage your product listings.

 **Seller responsibilities**
 Sellers are responsible for ensuring that their products are authentic, lawful to sell, accurately described, appropriately priced, and compliant with applicable safety and labeling requirements. Sellers must keep stock information current, fulfill orders within the agreed handling times, respond to customer issues, and follow NextAmazon's marketplace policies.

 Seller eligibility, fees, payment arrangements, shipping responsibilities, and onboarding requirements will be confirmed directly with our team. Submitting an inquiry does not guarantee acceptance as a seller.

 Interested in selling with us? Contact NextAmazon and include **Sell on NextAmazon** in your message.`,
      isPublished: true,
    },
    {
      title: "Become Affiliate",
      slug: "become-affiliate",
      content: `Join the NextAmazon Affiliate Program and earn commission by referring customers to eligible products through your website, blog, social channels, or other approved platforms.

 **How it works**
 1. Send us information about your platform and audience through the Contact Us page.
 2. Our team will review your application and confirm whether your platform is suitable.
 3. If approved, you will receive details about the affiliate terms and how to create and use tracking links.
 4. Share approved links with your audience and earn commissions on qualifying purchases according to the program terms.

 **Who can apply?**
 We welcome relevant websites, content creators, bloggers, and publishers with an audience interested in products available on NextAmazon. Applicants must be able to publish original, lawful content and follow applicable advertising and disclosure rules.

 **Affiliate guidelines**
 Affiliates must clearly disclose their relationship with NextAmazon, use links and promotional materials as instructed, and avoid misleading claims, spam, unauthorized brand use, or deceptive advertising. Commission rates, qualifying purchases, attribution periods, payment thresholds, and payment schedules will be provided in the applicable affiliate agreement and may be updated in accordance with its terms.

 Applying does not guarantee acceptance. To express your interest, contact us with the subject **Affiliate Program** and include your website or social profile links and a brief description of your audience.`,
      isPublished: true,
    },
    {
      title: "Advertise Your Products",
      slug: "advertise",
      content: `Promote your brand and products to customers shopping on NextAmazon. We are open to discussing advertising and promotional opportunities with brands, manufacturers, distributors, and eligible sellers whose products are relevant to our customers.

 **Potential advertising opportunities**
 Depending on availability and campaign objectives, promotional opportunities may include featured product placements, sponsored listings, homepage or category promotions, seasonal campaigns, and other agreed marketing placements.

 **What to include in your inquiry**
 To help us understand your campaign, please share:
 - Your company and brand name.
 - The products or categories you want to promote.
 - Your target audience and campaign objectives.
 - Your preferred campaign dates and approximate budget.
 - Product images, website links, and other relevant marketing materials.

 **Review and approval**
 All advertising proposals are subject to review, available inventory, and agreement on campaign terms. Advertisers must provide accurate claims and have the rights to all submitted materials. Advertising placement does not guarantee sales or a particular campaign result.

 Pricing, placement availability, creative specifications, reporting, and campaign terms will be discussed with our team before any campaign is confirmed.

 Interested in advertising? Contact us with the subject **Advertise on NextAmazon** and our team will guide you through the next steps.`,
      isPublished: true,
    },
    {
      title: "Shipping Rates & Policies",
      slug: "shipping",
      content: `NextAmazon offers delivery options designed to make receiving your order straightforward. Available services, delivery estimates, and shipping charges depend on the products in your order and the delivery destination.

 **1. Shipping Options and Rates**
 Available delivery methods and their costs are displayed during checkout after you enter your delivery address. Where offered, options may include standard and express delivery. Any free-shipping eligibility or minimum order value will be shown on the website or during checkout.

 **2. Delivery Estimates**
 Estimated delivery dates are provided during checkout or in your order details. Estimates are not guarantees and may be affected by product availability, payment verification, carrier capacity, weather, customs processing, or other circumstances outside our control.

 **3. Order Processing**
 Orders are prepared for dispatch after the required order and payment checks are completed. Processing times may vary by product and seller. If an item has a different handling or dispatch estimate, check its product page or order details.

 **4. Tracking Your Order**
 When tracking is available, you can find shipment updates in the **My Orders** section of your account. Tracking information may take some time to appear after an order has been dispatched.

 **5. Delivery Address and Receipt**
 Please check that your delivery address and contact details are correct before placing your order. If you need to change an address after ordering, contact Customer Support as soon as possible. Changes cannot be guaranteed once an order has entered the dispatch process. Someone may need to be available to receive the package depending on the carrier and delivery service.

 **6. Delayed, Missing, or Damaged Shipments**
 If tracking has not updated, your order has not arrived within the estimated timeframe, or your package arrives damaged, contact Customer Support with your order number. We will help you review the available information and next steps.

 **7. International Deliveries**
 For destinations where international delivery is available, customs duties, import taxes, and local fees may apply. The party responsible for these charges will be determined by the checkout information and applicable delivery terms. Customs processing may also affect delivery times.

 **8. Questions**
 For shipping assistance, visit our Contact Us page and include your order number. The shipping options and final charges shown at checkout for your order take precedence over general estimates on this page.`,
      isPublished: true,
    },
  ],
  headerMenus: [
    {
      name: "Today's Deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New Arrivals",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Sellers",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
      name: "Customer Service",
      href: "/page/customer-service",
    },
    {
      name: "About Us",
      href: "/page/about-us",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],
  carousels: [
    {
      title: "Most Popular Shoes For Sale",
      buttonCaption: "Shop Now",
      image: "/images/banner3.jpg",
      url: "/search?category=Shoes",
      isPublished: true,
    },
    {
      title: "Best Sellers in T-Shirts",
      buttonCaption: "Shop Now",
      image: "/images/banner1.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
    {
      title: "Best Deals on Wrist Watches",
      buttonCaption: "See More",
      image: "/images/banner2.jpg",
      url: "/search?category=Wrist Watches",
      isPublished: true,
    },
  ],
  settings: [
    {
      common: {
        freeShippingMinPrice: 35,
        isMaintenanceMode: false,
        defaultTheme: "Light",
        defaultColor: "Gold",
        pageSize: 9,
      },
      site: {
        name: "NextAmazon",
        description:
          "NextAmazon is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.",
        keywords: "Next Ecommerce, Next.js, Tailwind CSS, MongoDB",
        url: "https://next-mongo-ecommerce-final.vercel.app",
        logo: "/icons/logo.svg",
        slogan: "Spend less, enjoy more.",
        author: "Next Ecommerce",
        copyright: "2000-2024, Next-Ecommerce.com, Inc. or its affiliates",
        email: "admin@example.com",
        address: "123, Main Street, Anytown, CA, Zip 12345",
        phone: "+1 (123) 456-7890",
      },
      carousels: [
        {
          title: "Most Popular Shoes For Sale",
          buttonCaption: "Shop Now",
          image: "/images/banner3.jpg",
          url: "/search?category=Shoes",
        },
        {
          title: "Best Sellers in T-Shirts",
          buttonCaption: "Shop Now",
          image: "/images/banner1.jpg",
          url: "/search?category=T-Shirts",
        },
        {
          title: "Best Deals on Wrist Watches",
          buttonCaption: "See More",
          image: "/images/banner2.jpg",
          url: "/search?category=Wrist Watches",
        },
      ],
      availableLanguages: i18n.locales.map((locale) => ({
        code: locale.code,
        name: locale.name,
      })),
      defaultLanguage: "en-US",
      availableCurrencies: [
        {
          name: "United States Dollar",
          code: "USD",
          symbol: "$",
          convertRate: 1,
        },
        { name: "Euro", code: "EUR", symbol: "€", convertRate: 0.96 },
        { name: "UAE Dirham", code: "AED", symbol: "AED", convertRate: 3.67 },
      ],
      defaultCurrency: "USD",
      availablePaymentMethods: [
        { name: "PayPal", commission: 0 },
        { name: "Stripe", commission: 0 },
        { name: "Cash On Delivery", commission: 0 },
      ],
      defaultPaymentMethod: "PayPal",
      availableDeliveryDates: [
        {
          name: "Tomorrow",
          daysToDeliver: 1,
          shippingPrice: 12.9,
          freeShippingMinPrice: 0,
        },
        {
          name: "Next 3 Days",
          daysToDeliver: 3,
          shippingPrice: 6.9,
          freeShippingMinPrice: 0,
        },
        {
          name: "Next 5 Days",
          daysToDeliver: 5,
          shippingPrice: 4.9,
          freeShippingMinPrice: 35,
        },
      ],
      defaultDeliveryDate: "Next 5 Days",
    },
  ],
};

export default data;
