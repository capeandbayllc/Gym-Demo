const placeholderImage = "https://www.kurin.com/wp-content/uploads/placeholder-square-768x768.jpg";

const generatePosItems = (brands = []) => {
    let items = [];
    let multiplier = Math.random();

    if (multiplier <= 0.5) {
        multiplier = 10;
    } else if (multiplier <= 0.9) {
        multiplier = 100;
    } else {
        multiplier = 1000;
    }

    brands.forEach(brand => {
        const numBrandItem = Math.ceil(Math.random() * 5);

        for (let index = 0; index < numBrandItem; index++) {
            items.push({
                name: `${brand} ${index + 1}`,
                price: (Math.random() * multiplier).toFixed(2),
                image: placeholderImage,
                quantity: Math.ceil(Math.random() * 10);
            });
        }
    });
}

export const inventoryCategories = [
    {
        title: "Apparel",
        subcategories: [
            {
                title: "Short Sleeve T-Shirt",
                icon: ShortSleeveShirtIcon,
                items: [
                    { name: "Nike 1", price: 0.0, image: placeholderImage, quantity: 0 },
                ],
            },
            {
                title: "Long Sleeve T-Shirt",
                icon: LongSleeveShirtIcon,
                items: [],
            },
            {
                title: "Ankle Socks",
                icon: AnkleSocksIcon,
                items: [],
            },
            {
                title: "Hats",
                icon: HatsIcon,
                items: [],
            },
            {
                title: "Tank Tops",
                icon: TankTopIcon,
                items: [],
            },
            {
                title: "Gloves",
                icon: GlovesIcon,
                items: [],
            },
        ],
    },
    {
        title: "Beverage",
        subcategories: [
            {
                title: "Water",
                icon: WaterBottleIcon,
                items: [],
            },
            {
                title: "Soda",
                icon: SodaIcon,
                items: [],
            },
            {
                title: "Caffeine Free Soda",
                icon: SodaIcon,
                items: [],
            },
            {
                title: "Sports Drink",
                icon: SportsDrinkIcon,
                items: [],
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