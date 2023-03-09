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

const placeholderImage = "https://www.kurin.com/wp-content/uploads/placeholder-square-768x768.jpg";

const generatePosItems = (prepend, brands = [], category) => {
    let items = [];
    let multiplier = Math.random();
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

    brands.forEach(brand => {
        const numBrandItem = Math.ceil(Math.random() * 5);

        for (let index = 0; index < numBrandItem; index++) {
            const price = (Math.random() * multiplier).toFixed(2);
            items.push({
                id: `${prepend} - ${brand} ${index + 1}`,
                name: `${prepend} - ${brand} ${index + 1}`,
                price: price,
                image: placeholderImage,
                available: Math.floor(Math.random() * 10),
                tax: (parseFloat(price) * taxRate / 100).toFixed(2),
                category
            });
        }
    });

    return items;
}

export const inventoryCategories = [
    {
        title: "Apparel",
        subcategories: [
            {
                title: "Short Sleeve T-Shirt",
                icon: ShortSleeveShirtIcon,
                items: generatePosItems("SSTS", ["Nike", "Adidas", "Under Armour", "Lululemon"], "Apparel"),
            },
            {
                title: "Long Sleeve T-Shirt",
                icon: LongSleeveShirtIcon,
                items: generatePosItems("LSTS", ["Nike", "Adidas", "Under Armour", "Lululemon"], "Apparel"),
            },
            {
                title: "Ankle Socks",
                icon: AnkleSocksIcon,
                items: generatePosItems("AnS", ["Nike", "Adidas", "Under Armour", "Lululemon"], "Apparel"),
            },
            {
                title: "Hats",
                icon: HatsIcon,
                items: generatePosItems("HT", ["Nike", "Adidas", "Under Armour", "Lululemon"], "Apparel"),
            },
            {
                title: "Tank Tops",
                icon: TankTopIcon,
                items: generatePosItems("TT", ["Nike", "Adidas", "Under Armour", "Lululemon"], "Apparel"),
            },
            {
                title: "Gloves",
                icon: GlovesIcon,
                items: generatePosItems("GL", ["Nike", "Adidas", "Under Armour", "Lululemon"], "Apparel"),
            },
        ],
    },
    {
        title: "Beverage",
        subcategories: [
            {
                title: "Water",
                icon: WaterBottleIcon,
                items: generatePosItems("WT", ["Company", "Another Company", "Second Another Company", "Some Company"], "Beverage"),
            },
            {
                title: "Soda",
                icon: SodaIcon,
                items: generatePosItems("SO", ["Company", "Another Company", "Second Another Company", "Some Company"], "Beverage"),
            },
            {
                title: "Caffeine Free Soda",
                icon: SodaIcon,
                items: generatePosItems("CFS", ["Company", "Another Company", "Second Another Company", "Some Company"], "Beverage"),
            },
            {
                title: "Sports Drink",
                icon: SportsDrinkIcon,
                items: generatePosItems("SD", ["Company", "Another Company", "Second Another Company", "Some Company"], "Beverage"),
            },
        ],
    },
    {
        title: "Membership",
        subcategories: [
            {
                title: "Upgrade Membership",
                icon: UpgradeMembershipIcon,
                items: [],
            },
            {
                title: "Add PT",
                icon: AddPTIcon,
                items: [],
            },
        ],
    },
];