export let resList = [
  {
    id:"123",
    name:"KFC",
    cuisines:["Indian", "Fast Food", "Snacks"],
    avgRating: 5
  },
  {
    id:"456",
    name:"MCD",
    cuisines:["Indian", "Fast Food", "Snacks"],
    avgRating: 3.2
  },
  {
    id:"789",
    name:"MCD",
    cuisines:["Indian", "Fast Food", "Snacks"],
    avgRating: 4.5
  },
  {
    id:"987",
    name:"MCD",
    cuisines:["Indian", "Fast Food", "Snacks"],
    avgRating: 3.8
  },
  {
    id:"654",
    name:"MCD",
    cuisines:["Indian", "Fast Food", "Snacks"],
    avgRating: 5
  }
];

// Image CDN URL for Restaurant card
export const img_cdn_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Swiggy API to get Restaurant data with foodfire erver
export const swiggy_api_URL =
  "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

export const swiggy_menu_api_URL =
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";