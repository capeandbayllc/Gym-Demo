import {
  ShortSleeveShirtIcon,
  LongSleeveShirtIcon,
  AnkleSocksIcon,
  HatsIcon,
  TankTopIcon,
  GlovesIcon,
  WaterBottleIcon,
  SodaIcon,
  SportsDrinkIcon,
  UpgradeMembershipIcon,
  AddPTIcon,
} from "~~/components/icons";

const placeholderImage =
  "https://www.kurin.com/wp-content/uploads/placeholder-square-768x768.jpg";
const itemsMeta = [
  {
    category: "Apparel",
    suppliers: ["Nike", "Adidas", "Under Armour", "Lululemon"],
    subcategories: [
      {
        multiplier: Math.random(),
        title: "Short Sleeve T-Shirt",
        icon: ShortSleeveShirtIcon,
        short: "SSTS",
      },
      {
        multiplier: Math.random(),
        title: "Long Sleeve T-Shirt",
        icon: LongSleeveShirtIcon,
        short: "LSTS",
      },
      {
        multiplier: Math.random(),
        title: "Ankle Socks",
        icon: AnkleSocksIcon,
        short: "AnS",
      },

      {
        multiplier: Math.random(),
        title: "Hats",
        icon: HatsIcon,
        short: "HT",
      },
      {
        multiplier: Math.random(),
        title: "Tank Tops",
        icon: TankTopIcon,
        short: "TT",
      },
      {
        multiplier: Math.random(),
        title: "Gloves",
        icon: GlovesIcon,
        short: "GL",
      },
    ],
  },
  {
    category: "Beverage",
    suppliers: [
      "Company",
      "Another Company",
      "Second Another Company",
      "Some Company",
    ],
    subcategories: [
      {
        multiplier: Math.random(),
        title: "Water",
        icon: WaterBottleIcon,
        short: "WT",
      },
      {
        multiplier: Math.random(),
        title: "Soda",
        icon: SodaIcon,
        short: "SO",
      },
      {
        multiplier: Math.random(),
        title: "Caffeine Free Soda",
        icon: SodaIcon,
        short: "CFS",
      },
      {
        multiplier: Math.random(),
        title: "Sports Drink",
        icon: SportsDrinkIcon,
        short: "SD",
      },
    ],
  },
  {
    category: "Membership",
    suppliers: ["Personal", "Corporate"],
    subcategories: [
      {
        multiplier: Math.random(),
        title: "Upgrade Membership",
        icon: UpgradeMembershipIcon,
        items: ["Elite", "Classic", "Pro", "Daily"],
        short: "M",
      },
      {
        multiplier: Math.random(),
        title: "Add PT",
        icon: AddPTIcon,
        items: ["Elite", "Classic", "Pro", "Daily"],
        short: "PT",
      },
    ],
  },
];

const generatePosItems = () => {
  let items = [];

  itemsMeta.forEach((cat) => {
    const category = cat;
    const brands = cat.suppliers;
    cat.subcategories.forEach((subcategory) => {
      const prepend = subcategory.short;
      let multiplier = subcategory.multiplier;
      let taxRate = 0;

      if (multiplier <= 0.5) {
        multiplier = 10;
        taxRate = 5;
      } else if (multiplier <= 0.9) {
        multiplier = 100;
        taxRate = 7.5;
      } else {
        multiplier = 1000;
        taxRate = 10;
      }

      brands.forEach((brand) => {
        const numBrandItem = Math.ceil(Math.random() * 2) + 1;

        for (let index = 0; index < numBrandItem; index++) {
          const price = (Math.random() * multiplier).toFixed(2);
          items.push({
            id: `${prepend} - ${brand} ${index + 1}`,
            name: `${prepend} - ${brand} ${index + 1}`,
            price: price,
            image: placeholderImage,
            available: Math.floor(Math.random() * 10),
            tax: ((parseFloat(price) * taxRate) / 100).toFixed(2),
            category: category.category,
            subcategory: subcategory.title,
          });
        }
      });
    });
  });

  return items;
};

const getInventoryCategories = () => {
  let categories = [];

  itemsMeta.forEach((cat) => {
    categories.push({
      id: cat.category,
      title: cat.category,
      subcategories: cat.subcategories,
    });
  });

  return categories;
};

export const inventory = generatePosItems();
export const inventoryCategories = getInventoryCategories();
