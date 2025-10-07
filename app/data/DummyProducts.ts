export interface Rating {
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  averageRating: number;
  isFeatured: boolean;
  brand: string;
  ratings: Rating[];
}

export const dummyProducts: Product[] = [
  {
    _id: "df1",
    name: "Premium Almonds (250g)",
    description: "Crunchy California almonds packed with protein and nutrients.",
    price: 350,
    stock: 100,
    images: [
      "https://media.istockphoto.com/id/1487307589/photo/pattern-organic-almond-nut-raw-peeled-as-background-top-view-healthy-snack-or-for-vegetarians.webp?a=1&b=1&s=612x612&w=0&k=20&c=S5_ZZ8MYxhmhBB72BQiM6VcOFtx1TMC8OoiUExaqlR0="
    ],
    averageRating: 4.5,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ritika Joshi",
        rating: 5,
        comment: "Super crisp and fresh almonds. Great energy booster!",
        date: "January 2025"
      },
      {
        userName: "Rohit Verma",
        rating: 4,
        comment: "Nice quality, though a little pricey.",
        date: "February 2025"
      },
      {
        userName: "Priya Sharma",
        rating: 5,
        comment: "Perfect for gifting and daily snacking. Loved the packaging.",
        date: "March 2025"
      },
      {
        userName: "Sneha Gupta",
        rating: 4,
        comment: "Fresh and crunchy. Slightly oily but tastes premium.",
        date: "April 2025"
      },
      {
        userName: "Ankit Tiwari",
        rating: 5,
        comment: "Best almonds I’ve bought online. Totally worth it!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df2",
    name: "Organic Cashews (250g)",
    description: "Whole, creamy cashews for snacking or cooking.",
    price: 420,
    stock: 80,
    images: [
      "https://media.istockphoto.com/id/2212600938/photo/close-up-view-of-fresh-organic-cashews-in-a-bowl-shot-on-rustic-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=QMMcT6HVeatdKIbgc3okEGehTqsAoPX9v3SUWzhd9dc="
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Kiran Patel",
        rating: 5,
        comment: "Big whole cashews — rich and creamy taste.",
        date: "January 2025"
      },
      {
        userName: "Meena Rao",
        rating: 4,
        comment: "Fresh and crunchy. Loved using them in curries.",
        date: "February 2025"
      },
      {
        userName: "Amit Sharma",
        rating: 5,
        comment: "Perfectly roasted and clean. Great snack option!",
        date: "March 2025"
      },
      {
        userName: "Divya Menon",
        rating: 4,
        comment: "Good quality but a bit expensive compared to local stores.",
        date: "April 2025"
      },
      {
        userName: "Neha Kapoor",
        rating: 5,
        comment: "Very tasty and premium cashews. Highly recommend!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df3",
    name: "Medjool Dates (500g)",
    description: "Naturally sweet premium dates, energy booster.",
    price: 280,
    stock: 60,
    images: [
      "https://images.unsplash.com/photo-1742796847334-1fa19b4aa249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVkam9vbCUyMERhdGVzfGVufDB8fDB8fHww"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Sana Qureshi",
        rating: 5,
        comment: "Soft, juicy, and perfectly sweet! Ideal for Ramadan.",
        date: "January 2025"
      },
      {
        userName: "Rajeev Nair",
        rating: 4,
        comment: "Tasty but a few pieces were slightly dry.",
        date: "February 2025"
      },
      {
        userName: "Preeti Jain",
        rating: 5,
        comment: "Authentic Medjool flavor — rich and caramel-like.",
        date: "March 2025"
      },
      {
        userName: "Anjali Mehta",
        rating: 4,
        comment: "Good quality, wish they had a resealable pack.",
        date: "April 2025"
      },
      {
        userName: "Mohammed Irfan",
        rating: 5,
        comment: "Top-notch dates — soft and naturally sweet.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df4",
    name: "Raisins (250g)",
    description: "Golden raisins full of natural sweetness and energy.",
    price: 120,
    stock: 150,
    images: [
      "https://images.unsplash.com/photo-1642102903918-b97c37955bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFpc2luc3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    averageRating: 4.2,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ravi Kumar",
        rating: 4,
        comment: "Fresh and sweet. Perfect for baking and snacking.",
        date: "January 2025"
      },
      {
        userName: "Neha Sharma",
        rating: 5,
        comment: "Nice golden color and juicy texture.",
        date: "February 2025"
      },
      {
        userName: "Alok Singh",
        rating: 4,
        comment: "Good quality but slightly sticky in the packet.",
        date: "March 2025"
      },
      {
        userName: "Swati Agarwal",
        rating: 5,
        comment: "Lovely sweetness and aroma — will buy again!",
        date: "April 2025"
      },
      {
        userName: "Aisha Khan",
        rating: 4,
        comment: "Affordable and tasty. Good for kids’ snacks.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df5",
    name: "Pistachios (250g)",
    description: "Roasted pistachios with shell, lightly salted.",
    price: 480,
    stock: 90,
    images: [
      "https://media.istockphoto.com/id/115947523/photo/pistachios.webp?a=1&b=1&s=612x612&w=0&k=20&c=co6RV97xfH5ArVFARHqGB5o04ibj7NmA9fBaRFILoM0="
    ],
    averageRating: 4.6,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Manish Joshi",
        rating: 5,
        comment: "Crisp and perfectly salted. Great evening snack.",
        date: "January 2025"
      },
      {
        userName: "Pooja Patel",
        rating: 5,
        comment: "Loved the quality — very few closed shells.",
        date: "February 2025"
      },
      {
        userName: "Rahul Bhatia",
        rating: 4,
        comment: "Tasty but slightly high in price.",
        date: "March 2025"
      },
      {
        userName: "Kavita Iyer",
        rating: 5,
        comment: "Excellent freshness and flavor.",
        date: "April 2025"
      },
      {
        userName: "Vikas Jain",
        rating: 4,
        comment: "Good product overall. Will reorder soon.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df6",
    name: "Walnuts (250g)",
    description: "Premium walnut kernels rich in omega-3.",
    price: 400,
    stock: 70,
    images: [
      "https://images.unsplash.com/photo-1605525483148-8fb743b620da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdhbG51dHN8ZW58MHx8MHx8fDA%3D"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Nisha Verma",
        rating: 5,
        comment: "Very fresh kernels, no bitterness at all.",
        date: "January 2025"
      },
      {
        userName: "Saurabh Mishra",
        rating: 4,
        comment: "Crisp and healthy, but packaging could be better.",
        date: "February 2025"
      },
      {
        userName: "Arjun Mehta",
        rating: 5,
        comment: "Rich taste and good oil content. Excellent for baking.",
        date: "March 2025"
      },
      {
        userName: "Divya Kapoor",
        rating: 4,
        comment: "A bit pricey but worth it for the quality.",
        date: "April 2025"
      },
      {
        userName: "Payal Singh",
        rating: 5,
        comment: "Perfectly fresh and crunchy! Highly recommend.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df7",
    name: "Hazelnuts (200g)",
    description: "Crunchy hazelnuts for snacking and desserts.",
    price: 360,
    stock: 50,
    images: [
      "https://images.unsplash.com/photo-1635843130314-c0b5cc832b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGF6ZWxudXRzfGVufDB8fDB8fHww"
    ],
    averageRating: 4.1,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Mehul Jain",
        rating: 4,
        comment: "Fresh and crunchy hazelnuts. Worked well for chocolates.",
        date: "January 2025"
      },
      {
        userName: "Sneha Kapoor",
        rating: 5,
        comment: "Perfect for desserts. Very tasty and aromatic.",
        date: "February 2025"
      },
      {
        userName: "Aditya Rao",
        rating: 4,
        comment: "Nice flavor, though a few pieces were broken.",
        date: "March 2025"
      },
      {
        userName: "Ritu Sharma",
        rating: 4,
        comment: "Good quality overall, not too oily.",
        date: "April 2025"
      },
      {
        userName: "Harsh Gupta",
        rating: 5,
        comment: "Premium taste — goes great with Nutella recipes!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df8",
    name: "Apricots (250g)",
    description: "Sun-dried apricots with a natural tangy taste.",
    price: 210,
    stock: 65,
    images: [
      "https://images.unsplash.com/photo-1636043979306-e21033b4dc24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXByaWNvdHN8ZW58MHx8MHx8fDA%3D"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Anjali Das",
        rating: 5,
        comment: "Tangy and soft — great for snacking.",
        date: "January 2025"
      },
      {
        userName: "Rohit Sinha",
        rating: 4,
        comment: "Good texture, slightly chewy but flavorful.",
        date: "February 2025"
      },
      {
        userName: "Poonam Chatterjee",
        rating: 5,
        comment: "Perfect blend of sweet and sour. Loved them!",
        date: "March 2025"
      },
      {
        userName: "Kunal Patel",
        rating: 4,
        comment: "Fresh and hygienic packaging. A bit less sweet than expected.",
        date: "April 2025"
      },
      {
        userName: "Shruti Nanda",
        rating: 5,
        comment: "Very good quality apricots. Totally natural taste.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df9",
    name: "Brazil Nuts (200g)",
    description: "Rare, selenium-rich Brazil nuts for immunity.",
    price: 500,
    stock: 40,
    images: [
      "https://images.unsplash.com/photo-1614807618553-35332e4de00d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJhemlsJTIwTnV0c3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    averageRating: 4.6,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Rashmi Bansal",
        rating: 5,
        comment: "Hard to find in India — very fresh and tasty!",
        date: "January 2025"
      },
      {
        userName: "Vivek Shah",
        rating: 4,
        comment: "Good quality but expensive. Worth for the health benefits.",
        date: "February 2025"
      },
      {
        userName: "Pallavi Desai",
        rating: 5,
        comment: "Super crunchy and filling. Great for keto diets.",
        date: "March 2025"
      },
      {
        userName: "Rahul Nanda",
        rating: 5,
        comment: "Excellent source of selenium. Very authentic product.",
        date: "April 2025"
      },
      {
        userName: "Sakshi Yadav",
        rating: 4,
        comment: "High quality, wish the pack was resealable.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "df10",
    name: "Mixed Dry Fruits (500g)",
    description: "Assorted mix of almonds, cashews, raisins, and walnuts.",
    price: 550,
    stock: 75,
    images: [
      "https://media.istockphoto.com/id/2213034652/photo/overhead-view-of-nuts-and-seeds-in-a-bowl-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=4g8pTty1XkVzMmtb5GFrgErR4pOCKhL9h9_J0YkYbtQ="
    ],
    averageRating: 4.7,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Reema Kapoor",
        rating: 5,
        comment: "Lovely mix — everything was fresh and crunchy!",
        date: "January 2025"
      },
      {
        userName: "Ankit Sharma",
        rating: 5,
        comment: "Perfect balance of nuts and raisins. Great for travel.",
        date: "February 2025"
      },
      {
        userName: "Poonam Singh",
        rating: 4,
        comment: "Quality is great but wish there were more cashews.",
        date: "March 2025"
      },
      {
        userName: "Gaurav Jain",
        rating: 5,
        comment: "Super fresh and tasty. My kids love it.",
        date: "April 2025"
      },
      {
        userName: "Simran Ahuja",
        rating: 5,
        comment: "Ideal gift pack — beautiful and healthy combo.",
        date: "May 2025"
      }
    ]
  },
  // === Grains & Pulses ===
  {
    _id: "gr1",
    name: "Basmati Rice (1kg)",
    description: "Long grain aromatic Basmati rice.",
    price: 150,
    stock: 200,
    images: [
      "https://media.istockphoto.com/id/2206941657/photo/raw-basmati-rice-in-bowl-and-spoon-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=o45N1vE5pqjbVZPmAHG9SRpaI9biOjXi3dp1IC3knEY="
    ],
    averageRating: 4.8,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Sanjay Kumar",
        rating: 5,
        comment: "Excellent fragrance and very long grains. Perfect for biryani!",
        date: "January 2025"
      },
      {
        userName: "Pooja Patel",
        rating: 4,
        comment: "Nice texture, cooks well. Slightly pricey but worth it.",
        date: "February 2025"
      },
      {
        userName: "Ritesh Arora",
        rating: 5,
        comment: "Every grain separates beautifully. Five stars!",
        date: "March 2025"
      },
      {
        userName: "Divya Nair",
        rating: 5,
        comment: "Superb quality rice — perfect aroma!",
        date: "April 2025"
      },
      {
        userName: "Kiran Shah",
        rating: 5,
        comment: "Used it for pulao — amazing results.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr2",
    name: "Organic Wheat Flour (5kg)",
    description: "Stone-ground organic wheat flour for soft chapatis.",
    price: 280,
    stock: 90,
    images: [
      "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=500&auto=format&fit=crop&q=60"
    ],
    averageRating: 4.5,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Sneha Gupta",
        rating: 5,
        comment: "Makes really soft rotis. Very natural taste.",
        date: "January 2025"
      },
      {
        userName: "Rajiv Mehta",
        rating: 4,
        comment: "Good quality flour, fresh aroma. Slightly coarse texture.",
        date: "February 2025"
      },
      {
        userName: "Poonam Agarwal",
        rating: 5,
        comment: "Best organic atta I’ve used so far.",
        date: "March 2025"
      },
      {
        userName: "Kiran Das",
        rating: 4,
        comment: "Chapatis stay soft for hours!",
        date: "April 2025"
      },
      {
        userName: "Neetu Verma",
        rating: 5,
        comment: "Excellent quality, chemical free. Highly recommend.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr3",
    name: "Yellow Moong Dal (1kg)",
    description: "Protein-rich yellow moong dal, easy to digest.",
    price: 120,
    stock: 150,
    images: [
      "https://media.istockphoto.com/id/2222486631/photo/split-pigeon-pea-lentils.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Harish Patel",
        rating: 5,
        comment: "Clean and cooks evenly. Great protein source.",
        date: "January 2025"
      },
      {
        userName: "Suman Reddy",
        rating: 4,
        comment: "Good quality dal. Perfect for khichdi.",
        date: "February 2025"
      },
      {
        userName: "Ankita Jain",
        rating: 4,
        comment: "Fresh and nicely polished. No stones.",
        date: "March 2025"
      },
      {
        userName: "Vikram Yadav",
        rating: 5,
        comment: "Dal is soft and aromatic after cooking.",
        date: "April 2025"
      },
      {
        userName: "Priya Mishra",
        rating: 4,
        comment: "Value for money and healthy.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr4",
    name: "Chana Dal (1kg)",
    description: "Polished split chickpeas, rich in protein.",
    price: 110,
    stock: 180,
    images: [
      "https://media.istockphoto.com/id/1695168641/photo/yellow-lentils-or-chana-dal.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Sunita Sharma",
        rating: 5,
        comment: "Clean and cooks quickly. Lovely flavor.",
        date: "January 2025"
      },
      {
        userName: "Amit Singh",
        rating: 4,
        comment: "Nice quality. Slightly hard before soaking.",
        date: "February 2025"
      },
      {
        userName: "Shilpa Ghosh",
        rating: 4,
        comment: "Fresh dal and great packaging.",
        date: "March 2025"
      },
      {
        userName: "Ravi Mehta",
        rating: 5,
        comment: "Perfect for dal fry — aromatic and pure.",
        date: "April 2025"
      },
      {
        userName: "Deepika Nair",
        rating: 4,
        comment: "Tasty and nutritious, cooks evenly.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr5",
    name: "Masoor Dal (1kg)",
    description: "Red lentils, quick to cook and highly nutritious.",
    price: 105,
    stock: 160,
    images: [
      "https://plus.unsplash.com/premium_photo-1701064865216-4306843a809f?w=500"
    ],
    averageRating: 4.5,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Neha Kapoor",
        rating: 5,
        comment: "Very soft dal, cooks in 10 minutes. Great taste!",
        date: "January 2025"
      },
      {
        userName: "Vijay Kumar",
        rating: 4,
        comment: "Nice texture and aroma.",
        date: "February 2025"
      },
      {
        userName: "Tina D’Souza",
        rating: 5,
        comment: "Excellent quality — no impurities at all.",
        date: "March 2025"
      },
      {
        userName: "Karan Arora",
        rating: 4,
        comment: "Fresh and well-packed. Satisfied.",
        date: "April 2025"
      },
      {
        userName: "Ruchi Jain",
        rating: 5,
        comment: "Healthy and tasty lentils for daily cooking.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr6",
    name: "Rolled Oats (500g)",
    description: "Healthy rolled oats for a wholesome breakfast.",
    price: 130,
    stock: 120,
    images: [
      "https://images.unsplash.com/photo-1623066798929-946425dbe1b0?w=500"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Shruti Rao",
        rating: 5,
        comment: "Light and fresh oats. Perfect for overnight oats.",
        date: "January 2025"
      },
      {
        userName: "Amit Deshmukh",
        rating: 4,
        comment: "Cooks quickly, tastes great with fruits.",
        date: "February 2025"
      },
      {
        userName: "Rekha Sharma",
        rating: 4,
        comment: "Good texture and freshness.",
        date: "March 2025"
      },
      {
        userName: "Manoj Patel",
        rating: 5,
        comment: "Healthy and clean. Love it for breakfast.",
        date: "April 2025"
      },
      {
        userName: "Priya Nanda",
        rating: 4,
        comment: "Packaging could be resealable, otherwise perfect.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr7",
    name: "Quinoa (500g)",
    description: "Gluten-free quinoa packed with protein and fiber.",
    price: 220,
    stock: 95,
    images: [
      "https://media.istockphoto.com/id/157530877/photo/heart-shaped-superfood-organic-quinoa-whole-grain-in-hands.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.5,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ananya Rao",
        rating: 5,
        comment: "Very clean quinoa, no bitter taste. Perfect for salads.",
        date: "January 2025"
      },
      {
        userName: "Deepak Jain",
        rating: 4,
        comment: "Good quality, cooks evenly. Worth the price.",
        date: "February 2025"
      },
      {
        userName: "Saloni Bhat",
        rating: 5,
        comment: "Healthy and tasty grain, perfect substitute for rice.",
        date: "March 2025"
      },
      {
        userName: "Rohit Singh",
        rating: 4,
        comment: "Loved the packaging and freshness.",
        date: "April 2025"
      },
      {
        userName: "Nikita Mehta",
        rating: 5,
        comment: "Great for fitness meals — top-notch quality.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr8",
    name: "Barley (1kg)",
    description: "Pearled barley ideal for soups and salads.",
    price: 140,
    stock: 110,
    images: [
      "https://images.unsplash.com/photo-1499946253127-725623d773d5?w=500"
    ],
    averageRating: 4.2,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Pankaj Shah",
        rating: 4,
        comment: "Clean grains, nice chewy texture after boiling.",
        date: "January 2025"
      },
      {
        userName: "Maya Krishnan",
        rating: 5,
        comment: "Good for soups and health drinks. Very fresh.",
        date: "February 2025"
      },
      {
        userName: "Rahul Khanna",
        rating: 4,
        comment: "High fiber, perfect for diet. Decent pack size.",
        date: "March 2025"
      },
      {
        userName: "Smita Joshi",
        rating: 4,
        comment: "Excellent quality barley at fair price.",
        date: "April 2025"
      },
      {
        userName: "Harsha Verma",
        rating: 5,
        comment: "Wholesome and filling, good for porridge.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr9",
    name: "Toor Dal (1kg)",
    description: "Arhar dal with mild flavor, staple in Indian households.",
    price: 125,
    stock: 140,
    images: [
      "https://images.unsplash.com/photo-1630409349416-24884761a307?w=500"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Manoj Pillai",
        rating: 5,
        comment: "Fresh and aromatic. Perfect for sambar and dal tadka.",
        date: "January 2025"
      },
      {
        userName: "Kavita Sharma",
        rating: 4,
        comment: "Nice flavor, cooks well. Recommended.",
        date: "February 2025"
      },
      {
        userName: "Yash Singh",
        rating: 4,
        comment: "Very clean, no dust or stones.",
        date: "March 2025"
      },
      {
        userName: "Renu Bhatia",
        rating: 5,
        comment: "Authentic arhar dal taste — great aroma!",
        date: "April 2025"
      },
      {
        userName: "Ashok Gupta",
        rating: 4,
        comment: "Good quality dal. Worth the money.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "gr10",
    name: "Kabuli Chana (1kg)",
    description: "White chickpeas, great for chole and salads.",
    price: 145,
    stock: 130,
    images: [
      "https://media.istockphoto.com/id/2233297424/photo/dried-chick-pea-also-know-as-kabuli-chana.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Seema Yadav",
        rating: 5,
        comment: "Soft after soaking, makes perfect chole.",
        date: "January 2025"
      },
      {
        userName: "Vikas Pandey",
        rating: 4,
        comment: "Good size and taste. Clean product.",
        date: "February 2025"
      },
      {
        userName: "Aarti Joshi",
        rating: 4,
        comment: "Cooks evenly, very satisfying.",
        date: "March 2025"
      },
      {
        userName: "Rohit Agarwal",
        rating: 5,
        comment: "Loved it! Excellent for hummus and curries.",
        date: "April 2025"
      },
      {
        userName: "Meena Singh",
        rating: 4,
        comment: "Quality product. Great packaging.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp1",
    name: "Turmeric Powder (200g)",
    description: "Bright yellow turmeric powder with earthy aroma.",
    price: 90,
    stock: 200,
    images: [
      "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=500"
    ],
    averageRating: 4.6,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ritika Joshi",
        rating: 5,
        comment: "Pure haldi with strong color. My curries look amazing!",
        date: "January 2025"
      },
      {
        userName: "Rohit Verma",
        rating: 4,
        comment: "Good quality, slightly coarse texture.",
        date: "February 2025"
      },
      {
        userName: "Sneha Gupta",
        rating: 5,
        comment: "Very aromatic and authentic taste.",
        date: "March 2025"
      },
      {
        userName: "Ankit Tiwari",
        rating: 4,
        comment: "Nice earthy flavor, packaging could improve.",
        date: "April 2025"
      },
      {
        userName: "Priya Sharma",
        rating: 5,
        comment: "Natural color, no artificial smell — love it!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp2",
    name: "Black Pepper (100g)",
    description: "Bold and aromatic black peppercorns.",
    price: 120,
    stock: 70,
    images: [
      "https://images.unsplash.com/photo-1624351251625-cf02b018223c?w=500"
    ],
    averageRating: 4.5,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Karan Mehta",
        rating: 5,
        comment: "Strong aroma and sharp flavor. Perfect grind size.",
        date: "January 2025"
      },
      {
        userName: "Deepika Rao",
        rating: 4,
        comment: "Very fresh but slightly uneven sizes.",
        date: "February 2025"
      },
      {
        userName: "Arun Sharma",
        rating: 5,
        comment: "Authentic Malabar pepper taste!",
        date: "March 2025"
      },
      {
        userName: "Shweta Patel",
        rating: 4,
        comment: "Nice packaging, good value for money.",
        date: "April 2025"
      },
      {
        userName: "Naveen Singh",
        rating: 5,
        comment: "Fragrant and spicy — real pepper flavor.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp3",
    name: "Cardamom (50g)",
    description: "Premium green cardamom pods for rich flavor.",
    price: 250,
    stock: 50,
    images: [
      "https://images.unsplash.com/photo-1624351251625-cf02b018223c?w=500"
    ],
    averageRating: 4.7,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Aarti Nair",
        rating: 5,
        comment: "Fragrant pods, perfect for tea and desserts!",
        date: "January 2025"
      },
      {
        userName: "Ramesh Gupta",
        rating: 4,
        comment: "Good aroma but a few open pods.",
        date: "February 2025"
      },
      {
        userName: "Sunita Patel",
        rating: 5,
        comment: "Very fresh and flavorful. Worth every rupee.",
        date: "March 2025"
      },
      {
        userName: "Tanuja Das",
        rating: 4,
        comment: "Nice fragrance, could be slightly larger pods.",
        date: "April 2025"
      },
      {
        userName: "Abhishek Rana",
        rating: 5,
        comment: "Best elaichi I’ve used for sweets.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp4",
    name: "Cinnamon Sticks (100g)",
    description: "Sweet and aromatic cinnamon sticks.",
    price: 85,
    stock: 90,
    images: [
      "https://images.unsplash.com/photo-1587411767714-d355c1f847ea?w=500"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Harini Iyer",
        rating: 5,
        comment: "Whole sticks, very fragrant and clean.",
        date: "January 2025"
      },
      {
        userName: "Vikram Soni",
        rating: 4,
        comment: "Nice aroma, slightly thin sticks.",
        date: "February 2025"
      },
      {
        userName: "Preeti Malhotra",
        rating: 4,
        comment: "Adds rich flavor to tea. Good purchase.",
        date: "March 2025"
      },
      {
        userName: "Gaurav Jain",
        rating: 5,
        comment: "Authentic Ceylon-like fragrance!",
        date: "April 2025"
      },
      {
        userName: "Nisha Roy",
        rating: 4,
        comment: "Strong aroma and taste. Happy with quality.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp5",
    name: "Cumin Seeds (200g)",
    description: "Earthy flavored cumin seeds for curries.",
    price: 95,
    stock: 140,
    images: [
      "https://images.unsplash.com/photo-1601723897386-e5df0c749fb7?w=500"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Manoj Verma",
        rating: 5,
        comment: "Fresh smell, strong flavor. Perfect for tadka.",
        date: "January 2025"
      },
      {
        userName: "Kavita Joshi",
        rating: 4,
        comment: "Good quality, evenly dried seeds.",
        date: "February 2025"
      },
      {
        userName: "Arjun Das",
        rating: 4,
        comment: "Nice earthy aroma, slightly dusty pack.",
        date: "March 2025"
      },
      {
        userName: "Rekha Patel",
        rating: 5,
        comment: "Excellent flavor for curries.",
        date: "April 2025"
      },
      {
        userName: "Anita Shah",
        rating: 4,
        comment: "Tastes fresh, great price.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp6",
    name: "Red Chili Powder (200g)",
    description: "Fiery red chili powder for extra heat.",
    price: 110,
    stock: 130,
    images: [
      "https://images.unsplash.com/photo-1607672632458-9eb56696346b?w=500"
    ],
    averageRating: 4.5,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Renu Sharma",
        rating: 5,
        comment: "Bright red color and perfect spice level.",
        date: "January 2025"
      },
      {
        userName: "Deepak Yadav",
        rating: 4,
        comment: "Good flavor, slightly too hot for me.",
        date: "February 2025"
      },
      {
        userName: "Neha Bansal",
        rating: 5,
        comment: "Adds vibrant color to food. Authentic taste.",
        date: "March 2025"
      },
      {
        userName: "Suresh Nair",
        rating: 4,
        comment: "Fresh and strong aroma.",
        date: "April 2025"
      },
      {
        userName: "Richa Ghosh",
        rating: 5,
        comment: "Loved the natural flavor — no artificial color!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp7",
    name: "Cloves (50g)",
    description: "Strongly aromatic cloves for seasoning.",
    price: 150,
    stock: 70,
    images: [
      "https://images.unsplash.com/photo-1701191310584-3f319e0e6c59?w=500"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Priyanka Menon",
        rating: 5,
        comment: "Full buds, very fragrant. Great for biryani.",
        date: "January 2025"
      },
      {
        userName: "Ajay Kumar",
        rating: 4,
        comment: "Nice spice strength. Few broken pieces.",
        date: "February 2025"
      },
      {
        userName: "Sonal Agarwal",
        rating: 4,
        comment: "Good quality and aroma.",
        date: "March 2025"
      },
      {
        userName: "Harshita Singh",
        rating: 5,
        comment: "Excellent for tea and curry seasoning.",
        date: "April 2025"
      },
      {
        userName: "Manu Gupta",
        rating: 4,
        comment: "Fresh smell, decent price.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp8",
    name: "Mustard Seeds (200g)",
    description: "Black mustard seeds for tempering and curries.",
    price: 80,
    stock: 90,
    images: [
      "https://images.unsplash.com/photo-1701188542905-01e99a1b8177?w=500"
    ],
    averageRating: 4.2,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Meera Nanda",
        rating: 5,
        comment: "Fresh seeds, pop beautifully in hot oil.",
        date: "January 2025"
      },
      {
        userName: "Suresh Rao",
        rating: 4,
        comment: "Good aroma, nice packaging.",
        date: "February 2025"
      },
      {
        userName: "Divya Thakur",
        rating: 4,
        comment: "Authentic flavor, works great for pickles.",
        date: "March 2025"
      },
      {
        userName: "Anil Kumar",
        rating: 5,
        comment: "Pure and fresh — love it for South Indian dishes.",
        date: "April 2025"
      },
      {
        userName: "Prema Iyer",
        rating: 4,
        comment: "Nice crunch and aroma.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp9",
    name: "Fenugreek Seeds (200g)",
    description: "Bitter aromatic seeds for spice blends.",
    price: 70,
    stock: 100,
    images: [
      "https://media.istockphoto.com/id/1285888022/photo/fenugreek-seeds-and-plant-on-a-old-wooden-background.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.1,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Nidhi Chauhan",
        rating: 4,
        comment: "Strong flavor, good for homemade masalas.",
        date: "January 2025"
      },
      {
        userName: "Keshav Sharma",
        rating: 5,
        comment: "Pure methi dana — very clean and aromatic.",
        date: "February 2025"
      },
      {
        userName: "Snehal Patel",
        rating: 4,
        comment: "Perfect bitterness level, good packaging.",
        date: "March 2025"
      },
      {
        userName: "Ritika Das",
        rating: 4,
        comment: "Nice fresh seeds. Value for money.",
        date: "April 2025"
      },
      {
        userName: "Vijay Rao",
        rating: 5,
        comment: "Perfect for pickle spice mix. Great quality.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp10",
    name: "Fennel Seeds (200g)",
    description: "Sweet fennel seeds, perfect as a mouth freshener.",
    price: 95,
    stock: 110,
    images: [
      "https://media.istockphoto.com/id/176081406/photo/fennel.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Shweta Jain",
        rating: 5,
        comment: "Very aromatic and sweet. Excellent after meals.",
        date: "January 2025"
      },
      {
        userName: "Rohan Patel",
        rating: 4,
        comment: "Good flavor but slightly dry texture.",
        date: "February 2025"
      },
      {
        userName: "Deepa Reddy",
        rating: 4,
        comment: "Fresh and clean seeds. Love the taste.",
        date: "March 2025"
      },
      {
        userName: "Alok Kumar",
        rating: 5,
        comment: "Perfect for fennel tea — highly fragrant!",
        date: "April 2025"
      },
      {
        userName: "Tara Joshi",
        rating: 5,
        comment: "Crisp and sweet flavor. Good quality.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp11",
    name: "Bay Leaves (50g)",
    description: "Aromatic bay leaves for slow-cooked dishes.",
    price: 60,
    stock: 80,
    images: [
      "https://images.unsplash.com/photo-1592380222497-0c40d4936b42?w=500"
    ],
    averageRating: 4.2,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Rahul Arora",
        rating: 4,
        comment: "Fresh leaves, great smell. Slightly small pieces.",
        date: "January 2025"
      },
      {
        userName: "Namrata Singh",
        rating: 5,
        comment: "Nice aroma, perfect for biryani!",
        date: "February 2025"
      },
      {
        userName: "Yogesh Patel",
        rating: 4,
        comment: "Clean leaves and well-dried.",
        date: "March 2025"
      },
      {
        userName: "Anu Mehta",
        rating: 4,
        comment: "Fragrant and easy to store.",
        date: "April 2025"
      },
      {
        userName: "Prakash Rao",
        rating: 5,
        comment: "Excellent quality bay leaves.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sp12",
    name: "Asafoetida (50g)",
    description: "Strong aromatic hing, essential in Indian dals.",
    price: 180,
    stock: 60,
    images: ["https://i.cdn.newsbytesapp.com/images/l65620250520152948.jpeg"],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ritika Joshi",
        rating: 5,
        comment: "Super fresh hing — gives perfect aroma to every dal!",
        date: "March 2025"
      },
      {
        userName: "Rohit Verma",
        rating: 4,
        comment: "Good quality and strong fragrance. Works great for Indian cooking.",
        date: "April 2025"
      },
      {
        userName: "Sneha Gupta",
        rating: 5,
        comment: "Very pure and potent. Reminds me of homemade flavors!",
        date: "January 2025"
      },
      {
        userName: "Ankit Tiwari",
        rating: 4,
        comment: "Nice aroma, but wish it came in a bigger pack.",
        date: "February 2025"
      },
      {
        userName: "Priya Sharma",
        rating: 5,
        comment: "Authentic taste and freshness. Highly recommend!",
        date: "May 2025"
      }
    ]
  },
  // === Seeds ===
  {
    _id: "se1",
    name: "Chia Seeds (250g)",
    description: "Omega-3 rich chia seeds for smoothies.",
    price: 180,
    stock: 120,
    images: [
      "https://images.unsplash.com/photo-1604768802835-899055f0e245?w=500"
    ],
    averageRating: 4.5,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Rohini Nair",
        rating: 5,
        comment: "Very fresh chia seeds — they gel perfectly in water!",
        date: "January 2025"
      },
      {
        userName: "Amit Patel",
        rating: 4,
        comment: "Clean and organic taste. Great for breakfast bowls.",
        date: "February 2025"
      },
      {
        userName: "Sonal Mehra",
        rating: 5,
        comment: "Good texture, no bitterness. Great quality.",
        date: "March 2025"
      },
      {
        userName: "Harish Reddy",
        rating: 4,
        comment: "Loved the freshness. Slightly high price but worth it.",
        date: "April 2025"
      },
      {
        userName: "Nikita Ghosh",
        rating: 5,
        comment: "Perfect for smoothies and overnight oats!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "se2",
    name: "Flax Seeds (250g)",
    description: "Nutty flax seeds high in fiber and omega-3.",
    price: 120,
    stock: 100,
    images: [
      "https://images.unsplash.com/photo-1642497393790-c5751b818e1b?w=500"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ritika Arora",
        rating: 5,
        comment: "Perfectly roasted flax seeds. Great crunch!",
        date: "January 2025"
      },
      {
        userName: "Vivek Sinha",
        rating: 4,
        comment: "Good for smoothies, slightly oily though.",
        date: "February 2025"
      },
      {
        userName: "Surbhi Mehta",
        rating: 4,
        comment: "Nice earthy taste, pure quality.",
        date: "March 2025"
      },
      {
        userName: "Mohit Sharma",
        rating: 5,
        comment: "Clean and crisp seeds — healthy addition to diet.",
        date: "April 2025"
      },
      {
        userName: "Rupal Jain",
        rating: 4,
        comment: "Excellent freshness, love the packaging.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "se3",
    name: "Pumpkin Seeds (250g)",
    description: "Protein-packed pumpkin seeds for snacking.",
    price: 220,
    stock: 90,
    images: [
      "https://images.unsplash.com/photo-1601368156156-fb9e52e2f5dd?w=500"
    ],
    averageRating: 4.6,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Neha Kapoor",
        rating: 5,
        comment: "Fresh, crunchy and lightly roasted — perfect snack!",
        date: "January 2025"
      },
      {
        userName: "Sanjay Rathi",
        rating: 4,
        comment: "Nice quality seeds, just a bit too salty for me.",
        date: "February 2025"
      },
      {
        userName: "Riya Sen",
        rating: 5,
        comment: "Premium taste. Great for salads and baking.",
        date: "March 2025"
      },
      {
        userName: "Abhay Sharma",
        rating: 5,
        comment: "Good amount of protein and freshness. Loved it.",
        date: "April 2025"
      },
      {
        userName: "Tina Dutta",
        rating: 5,
        comment: "Absolutely perfect quality pumpkin seeds!",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "se4",
    name: "Sunflower Seeds (250g)",
    description: "Lightly roasted sunflower seeds, healthy snack.",
    price: 150,
    stock: 100,
    images: [
      "https://images.unsplash.com/photo-1567008252030-8937e4e3e181?q=80&w=870&auto=format&fit=crop"
    ],
    averageRating: 4.4,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Poonam Desai",
        rating: 5,
        comment: "Crispy and fresh sunflower seeds. Great quality.",
        date: "January 2025"
      },
      {
        userName: "Ashish Gupta",
        rating: 4,
        comment: "Tasty snack but could use a resealable pouch.",
        date: "February 2025"
      },
      {
        userName: "Kiran Shah",
        rating: 4,
        comment: "Very good quality, fresh and lightly salted.",
        date: "March 2025"
      },
      {
        userName: "Manisha Patel",
        rating: 5,
        comment: "Delicious and crunchy. Perfect for munching anytime.",
        date: "April 2025"
      },
      {
        userName: "Raghav Nanda",
        rating: 5,
        comment: "Natural and healthy — loved the freshness!",
        date: "May 2025"
      }
    ]
  },
  // === Sweeteners ===
  {
    _id: "sw1",
    name: "Organic Jaggery (1kg)",
    description: "Traditional jaggery blocks made from sugarcane juice.",
    price: 140,
    stock: 90,
    images: [
      "https://www.greendna.in/cdn/shop/files/IMG_9609_5184x.jpg?v=1684468916"
    ],
    averageRating: 4.5,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Ritu Sharma",
        rating: 5,
        comment: "Pure, rich flavor and melts easily. Reminds me of village jaggery!",
        date: "January 2025"
      },
      {
        userName: "Amit Kumar",
        rating: 4,
        comment: "Fresh and aromatic, slightly sticky packaging.",
        date: "February 2025"
      },
      {
        userName: "Pallavi Joshi",
        rating: 5,
        comment: "Very natural taste, great for tea and sweets.",
        date: "March 2025"
      },
      {
        userName: "Nikhil Verma",
        rating: 5,
        comment: "Top quality — no impurities at all.",
        date: "April 2025"
      },
      {
        userName: "Seema Patel",
        rating: 4,
        comment: "Excellent jaggery but wish pack was resealable.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sw2",
    name: "Rock Sugar (500g)",
    description: "Crystalline rock sugar for desserts and remedies.",
    price: 100,
    stock: 85,
    images: ["https://spiceboat.in/wp-content/uploads/2023/05/Rock-sugar.jpg"],
    averageRating: 4.2,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Rajesh Menon",
        rating: 4,
        comment: "Nice large crystals, perfect for mouth fresheners.",
        date: "January 2025"
      },
      {
        userName: "Swati Nanda",
        rating: 5,
        comment: "Very pure and transparent rock sugar.",
        date: "February 2025"
      },
      {
        userName: "Deepak Sharma",
        rating: 4,
        comment: "Clean product, dissolves easily in tea.",
        date: "March 2025"
      },
      {
        userName: "Priya Kapoor",
        rating: 5,
        comment: "Perfect for prasad and desserts!",
        date: "April 2025"
      },
      {
        userName: "Arun Jain",
        rating: 4,
        comment: "Good quality mishri at reasonable price.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sw3",
    name: "Organic Honey (500ml)",
    description: "Pure forest honey with no additives.",
    price: 250,
    stock: 60,
    images: [
      "https://media.istockphoto.com/id/598241944/photo/honey-in-jar-and-bunch-of-dry-lavender.webp?a=1&b=1&s=612x612"
    ],
    averageRating: 4.7,
    isFeatured: true,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Meera Pillai",
        rating: 5,
        comment: "Thick, golden honey — tastes pure and raw!",
        date: "January 2025"
      },
      {
        userName: "Ankit Malhotra",
        rating: 4,
        comment: "Natural taste, a little crystallized in winter.",
        date: "February 2025"
      },
      {
        userName: "Nisha Rao",
        rating: 5,
        comment: "Excellent quality — perfect sweetness level.",
        date: "March 2025"
      },
      {
        userName: "Vikrant Das",
        rating: 5,
        comment: "Feels authentic. Great for morning lemon honey drink.",
        date: "April 2025"
      },
      {
        userName: "Surbhi Jain",
        rating: 5,
        comment: "Loved the taste! No artificial flavor at all.",
        date: "May 2025"
      }
    ]
  },
  {
    _id: "sw4",
    name: "Brown Sugar (1kg)",
    description: "Soft brown sugar for baking and beverages.",
    price: 130,
    stock: 70,
    images: [
      "https://images.unsplash.com/photo-1704079611177-a3a60ce6f975?w=700&auto=format&fit=crop&q=60"
    ],
    averageRating: 4.3,
    isFeatured: false,
    brand: "AV Trade",
    ratings: [
      {
        userName: "Kajal Deshmukh",
        rating: 5,
        comment: "Soft, moist brown sugar — perfect for cookies!",
        date: "January 2025"
      },
      {
        userName: "Ravi Patel",
        rating: 4,
        comment: "Fresh texture, slightly clumpy but good taste.",
        date: "February 2025"
      },
      {
        userName: "Tanvi Sharma",
        rating: 4,
        comment: "Great aroma and color. Works well in tea.",
        date: "March 2025"
      },
      {
        userName: "Manish Agarwal",
        rating: 5,
        comment: "High-quality sugar, very natural molasses flavor.",
        date: "April 2025"
      },
      {
        userName: "Pooja Nair",
        rating: 4,
        comment: "Nice quality, just wish the grains were finer.",
        date: "May 2025"
      }
    ]
  }
];


