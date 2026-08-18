import riceImg from "../assets/rice.png";
import wheatImg from "../assets/wheat.png";
import daalImg from "../assets/daal.png";
import chickpeasImg from "../assets/chickpeas.png";
import oilImg from "../assets/oil.png";
import gheeImg from "../assets/ghee.png";
import sugarImg from "../assets/sugar-salt.png";
import spicesImg from "../assets/spices.png";

export const products = [
  {
    id: 1,
    name: "Rice & Basmati",
    category: "Rice & Grains",
    description:
      "Rice varieties for everyday grocery and wholesale needs.",
    icon: riceImg,
  },
  {
    id: 2,
    name: "Wheat & Grains",
    category: "Rice & Grains",
    description:
      "Common grain products for retail and business requirements.",
    icon: wheatImg,
  },
  {
    id: 3,
    name: "Daal & Lentils",
    category: "Pulses & Daal",
    description:
      "Everyday pulses and lentils for grocery requirements.",
    icon: daalImg,
  },
  {
    id: 4,
    name: "Chickpeas",
    category: "Pulses & Daal",
    description:
      "Common chickpea products for wholesale grocery needs.",
    icon: chickpeasImg,
  },
  {
    id: 5,
    name: "Cooking Oil",
    category: "Cooking Essentials",
    description:
      "Cooking oil products for everyday kitchen requirements.",
    icon: oilImg,
  },
  {
    id: 6,
    name: "Ghee",
    category: "Cooking Essentials",
    description:
      "Ghee products for household and retail requirements.",
    icon: gheeImg,
  },
  {
    id: 7,
    name: "Sugar & Salt",
    category: "Cooking Essentials",
    description:
      "Essential grocery items for everyday use.",
    icon: sugarImg,
  },
  {
    id: 8,
    name: "Spices",
    category: "Spices",
    description:
      "Common spices and seasoning products.",
    icon: spicesImg,
  },
];

export const categories = [
  "All",
  "Rice & Grains",
  "Pulses & Daal",
  "Cooking Essentials",
  "Spices",
];