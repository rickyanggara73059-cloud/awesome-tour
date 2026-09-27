// Authoritative content: the user's verified extracts from the three tour PDFs.
// Keep source timings, sequence, spelling, and meal exceptions intact.
export type Tour = {
  slug: string;
  category: string;
  title: string;
  duration: string;
  price: string;
  location: string;
  minimum?: string;
  description: string;
  highlights: string[];
  included: string[];
  mealNotes?: string[];
  itinerary: { title: string; entries: string[] }[];
};

export const tours: Tour[] = [
  {
    slug: "lombok-island-5d4n",
    category: "SASAK TOUR · SNORKELING · NORTH TRIP",
    title: "Lombok Island 5D4N",
    duration: "5 Days / 4 Nights",
    price: "IDR 5.500K / pax",
    location: "Lombok",
    description: "Visit Sukarara Handicraft and Ende Village, explore Kuta Mandalika Beach, Tanjung Aan and Merese Hill, snorkel around the Gili Islands, and visit Selong Hill Sembalun and Senaru Waterfall.",
    highlights: ["Sasak tour", "Gili snorkeling", "Selong Hill Sembalun"],
    included: ["CAR", "FUEL", "DESTINATION TICKET", "BOAT", "SNORKELING GEAR", "HOTEL", "DRIVER & GUIDE", "BREAKFAST, LUNCH, AND DINNER"],
    mealNotes: [
      "The brochure's general inclusions list breakfast, lunch, and dinner; its daily itinerary also explicitly marks the following meals as excluded.",
      "Day 2, 18.30: Dinner Exclude.",
      "Day 3, 07.00: Breakfast Include; 11.30: Lunch Exclude; 16.00: Dinner Exclude.",
      "Day 4, 07.00: Breakfast Include.",
    ],
    itinerary: [
      { title: "AIRPORT - HOTEL", entries: [
        "Pick up at Lombok Airport and drop to hotel in Senggigi Area.",
        "Arrive at hotel, dinner and rest.",
      ] },
      { title: "SASAK TOUR", entries: [
        "08.00 Wake up, prepare and breakfast.",
        "09.00 Go to Sukarare Handicraft Traditional Dress.",
        "11.00 Arrive at Sukarara Handicraft and take photos/videos.",
        "12.00 Go to restaurant for lunch.",
        "13.00 Go to Ende Village and enjoy the Presean attraction.",
        "14.00 Go directly to Kuta Mandalika Beach.",
        "15.00 Arrive at Kuta Mandalika Beach, enjoy beach view and take photos/videos.",
        "16.00 Go to Tanjung Aan Beach and enjoy the beach.",
        "17.00 Go to Merese Hill, wait for sunset and enjoy the view.",
        "18.30 Back to hotel and dinner at restaurant. (Dinner Exclude)",
        "20.30 Arrive at hotel and rest.",
      ] },
      { title: "SNORKELING", entries: [
        "07.00 Wake up, prepare and breakfast. (Breakfast Include)",
        "08.00 Go to Teluk Nara Harbour.",
        "09.30 Arrive at Teluk Nara Harbour and get on boat to first snorkeling spot, Turtle Point.",
        "10.00 Arrive at first spot, enjoy snorkeling with turtles if lucky.",
        "10.30 Move to second spot, Statue Point.",
        "10.45 Enjoy underwater view with statues around Gili Trawangan and Gili Meno.",
        "11.30 Short break at Gili Meno for lunch. (Lunch Exclude)",
        "13.00 Continue to last spot at Gili Air, enjoy underwater view and fish.",
        "14.00 Return to Teluk Nare Harbour.",
        "15.00 Arrive at Teluk Nare Harbour and return to hotel.",
        "16.00 Arrive at hotel, dinner and rest. (Dinner Exclude)",
        "Trip Finish.",
      ] },
      { title: "NORTH TRIP", entries: [
        "07.00 Wake up, prepare and breakfast. (Breakfast Include)",
        "08.00 Start to Selong Hill Sembalun.",
        "11.00 Arrive at Selong Hill Sembalun and enjoy the view.",
        "13.00 Go to restaurant and get lunch.",
        "14.00 After lunch, go to Senaru Waterfall; shower, photos and videos.",
        "16.00 Back to hotel.",
        "19.00 Arrive at hotel and get dinner at restaurant.",
      ] },
      { title: "SOUVENIR", entries: [
        "09.00 Wake up, prepare, breakfast and checkout hotel; go to souvenir shop.",
        "09.30 Souvenir time.",
        "11.00 Go to airport.",
        "Trip Finish.",
      ] },
    ],
  },
  {
    slug: "lombok-island-4d3n",
    category: "SNORKELING · NORTH TRIP · SASAK TOUR",
    title: "Lombok Island 4D3N",
    duration: "4 Days / 3 Nights",
    price: "IDR 4.500K / pax",
    location: "Lombok",
    description: "Snorkel Gili ATM, visit Senaru Waterfall and Sembalun, enjoy Senggigi Sunset Point, and explore Sade Village, Kuta Beach, Mandalika Moto GP Circuit, Narmada Park and Sukarara Handicraft.",
    highlights: ["Snorkeling Gili ATM", "Senaru Waterfall", "Sade Traditional Village"],
    included: ["CAR", "FUEL", "DESTINATION TICKET", "BOAT", "SNORKELING GEAR", "HOTEL 3 NIGHT", "DRIVER & GUIDE", "BREAKFAST, LUNCH, AND DINNER"],
    itinerary: [
      { title: "SNORKELING", entries: [
        "08.00-11.00 Snorkeling Gili ATM.",
        "12.00 Check out hotel.",
        "13.00 Lunch and direct go to Lombok.",
        "14.00 Go to Senaru Hotel.",
        "15.00 Go to Senaru Waterfall.",
        "17.00 Back to hotel and get dinner.",
      ] },
      { title: "NORTH TRIP", entries: [
        "08.00 Wake up, breakfast and go to Selong Hill Sembalun.",
        "09.00 Arrive at Selong Hill and enjoy the view.",
        "10.00 Go to Traditional House Sembalun.",
        "11.00 Go to Strawberry Farm.",
        "12.00 Go to restaurant and get lunch.",
        "13.00 Go to Senggigi Hotel.",
        "15.00 Arrive at Senggigi Hotel and check in.",
        "16.00 Go to Senggigi Sunset Point and enjoy the view.",
        "18.00 Back to hotel and get dinner at restaurant.",
      ] },
      { title: "SASAK TOUR", entries: [
        "08.00 Wake up, prepare and breakfast.",
        "10.00 Go to Sade Traditional Village.",
        "12.00 Arrive at Sade Village.",
        "13.00 Go to restaurant near Kuta.",
        "14.00 Go to Kuta Beach.",
        "15.00 Go to Mandalika Moto GP Circuit.",
        "16.00 Go to Tanjung Aan Beach.",
        "17.00 Go to Meresse Hill and wait for sunset.",
        "18.00 Back to hotel and restaurant to get dinner.",
      ] },
      { title: "SOUVENIR", entries: [
        "08.00 Wake up and prepare for checkout hotel.",
        "10.00 Go to souvenir shop for cloth.",
        "11.00 Go to souvenir shop for local food and drink.",
        "12.00 Go to restaurant and get lunch.",
        "13.00 After lunch go to Narmada Park.",
        "14.00 Go to Sukarara Handicraft.",
        "15.00 Arrive at Sukarara Handicraft.",
        "16.00 Go to hotel nearby airport.",
        "16.30 Arrive at hotel.",
        "Trip Finish.",
      ] },
    ],
  },
  {
    slug: "north-lombok-3d2n",
    category: "NORTH LOMBOK · SOFT TREKKING",
    title: "North Lombok 3D2N",
    duration: "3 Days / 2 Nights",
    price: "IDR 1.850K / person",
    location: "North Lombok",
    minimum: "4 persons",
    description: "Visit Sindang Gila and Tiu Kelep Waterfalls, Bayan Traditional Mosque and rice terraces, trek Pergasingan Hill, and explore Selong Hill and Strawberry Fields. Minimum: 4 persons.",
    highlights: ["Senaru Waterfall", "Pergasingan Hill", "Selong Hill"],
    included: ["DESTINATION TICKET", "HOTEL", "CAR (AC)", "DRIVER & GUIDE", "FUEL", "FOOD AND DRINK"],
    itinerary: [
      { title: "Senaru Waterfall - Bayan Mosque - Bayan Rice Field Terraces", entries: [
        "07.00 Prepare and breakfast at hotel.",
        "08.00 Pick up at Tanjung Hotel and go to Senaru Waterfall (Sindang Gila Waterfall and Tiu Kelep Waterfall).",
        "10.00 Arrive at Senaru Waterfall Parking Area, prepare and go down to Sindang Gila Waterfall.",
        "10.15 Arrive at Sindang Gila Waterfall, take photos/videos, after 20-30 minutes continue to Tiu Kelep Waterfall.",
        "10.45 Go to Tiu Kelep Waterfall.",
        "11.00 Arrive at Tiu Kelep Waterfall; swimming and shower.",
        "12.00 Back to Senaru Waterfall Parking and go to restaurant for lunch.",
        "12.30 Arrive at restaurant in Senaru and get lunch.",
        "13.00 After lunch go to Bayan Traditional Mosque.",
        "14.00 Continue to Bayan Rice Terraces; enjoy green scenery with Mount Rinjani background.",
        "16.00 Head to hotel in Sembalun; dinner first in Sembalun.",
        "19.00 After dinner, go to hotel, check in and rest before trekking Pergasingan Hill.",
        "20.00 Soft briefing for trekking and rest.",
      ] },
      { title: "Soft Trekking Pergasingan Hill", entries: [
        "06.00 Wake up, prepare and breakfast in hotel.",
        "07.00 Start trekking to Pergasingan Hill.",
        "11.00 Arrive at summit of Pergasingan Hill, photos/videos.",
        "12.00 Lunch box and rest.",
        "13.00 After lunch go down to hotel.",
        "16.00 Arrive at hotel, take bath and rest.",
        "18.00 Go to restaurant for dinner.",
        "20.00 After dinner return to hotel and rest.",
      ] },
      { title: "Selong Hill - Kedai Sawah Garden", entries: [
        "07.00 Wake up, prepare and breakfast at hotel.",
        "08.00 Go to Selong Hill.",
        "08.30 Arrive at Selong Hill, photos/videos.",
        "09.30 Continue to Strawberry Fields to enjoy picking strawberries directly.",
        "11.00 Continue to restaurant with garden view for lunch.",
        "11.30 Arrive at restaurant and get lunch.",
        "13.00 After lunch, drop to hotel/airport.",
        "16.00 Arrive at hotel/airport.",
        "Trip Finish.",
      ] },
    ],
  },
];
