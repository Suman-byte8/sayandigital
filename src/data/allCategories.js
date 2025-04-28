import banners from "../assets/images/banners.png";
import businessCard from "../assets/images/business-cards.png";
import calendar from "../assets/images/calendar.png";
import corporateGifts from "../assets/images/corporate-gifts.png";
import mugs from "../assets/images/mugs.png";
import photoFrames from "../assets/images/photo-frames.png";
import standees from "../assets/images/standees.png";
import stickers from "../assets/images/stickers.png";
import trophy from "../assets/images/trophy.png";
import lighters from "../assets/images/customized-lighters.png";
import pen from "../assets/images/customized-pen.png";
import keychains from "../assets/images/key-rings.png";
import glassFrame from "../assets/images/sublimation-glass-photo-frame.png";
import tiles from "../assets/images/tiles.png";
import tshirt from "../assets/images/tshirt.png";
// import businessCard from '../assets/stationery/business-card.png'
import letterHead from '../assets/stationery/letter-head.png'
import envelope from '../assets/stationery/envelope.png'
import idCard from '../assets/images/idCard.png'

export const allCategories = [
  {
    id: 1,
    title: "Banners",
    image: banners,
    route: "banners",
  },
  {
    id: 2,
    title: "Business Cards",
    image: businessCard,
    route: "business-cards",
  },
  {
    id: 3,
    title: "Calendar",
    image: calendar,
    route: "calendar",
  },
  {
    id: 4,
    title: "Corporate Gifts",
    image: corporateGifts,
    route: "corporate-gifts",
  },
  {
    id: 5,
    title: "Mugs",
    image: mugs,
    route: "custom-mugs",
  },
  {
    id: 6,
    title: "Photo Frames",
    image: photoFrames,
    route: "photo-frames",
  },
  {
    id: 7,
    title: "Standees",
    image: standees,
    route: "standees",
  },
  {
    id: 8,
    title: "Stickers",
    image: stickers,
    route: "stickers",
  },

  {
    id:9,
    title:'Trophy',
    image:trophy,
    route:'trophy'
  },

  {
    id: 10,
    title: "Pen",
    image: pen,
    route: "pen",
  },
  {
    id: 11,
    title: "Keychains",
    image: keychains,
    route: "keychains",
  },

  {
    id: 12,
    title: "Tiles",
    image: tiles,
    route: "tiles",
  },
  {
    id: 13,
    title: "T-Shirts",
    image: tshirt,
    route: "tshirts",
  },
  { id: 14, 
    title: "Letter Head", 
    image: letterHead, 
    route: "letter-head" },
  {
    id: 15,
    title: "Invitation Card",
    image: envelope,
    route: "invitation-card",
  },
  {
    id: 16,
    title: "Id Cards",
    image:idCard,
    route: "id-cards",
  }
];

export default allCategories;
