import { createContext, useContext, useState } from "react";

export const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
    const defaultProduct = {
        id: 118,
        category: "perfumes",
        name: "OCEAN Man - 100ml",
        variant: "Eau De Parfum For Men",
        variantM: "Eau De Parfum For Men",
        price: "₹849.00",
        productType: "luxury",
        mrp: "₹1099",
        rating: "4.9",
        numOfReviews: "246 Reviews",
        discount: "23%",
        mainImg: [
            "https://bellavitaorganic.com/cdn/shop/files/Ocean-01_6cd0a2ed-3b3e-462a-a818-c2c2346b30c5.jpg?v=1717665492&width=1000",
            "https://bellavitaorganic.com/cdn/shop/files/Ocean-02.jpg?v=1717665518&width=535",
            "https://bellavitaorganic.com/cdn/shop/files/Ocean-05_ed6d39d8-70c9-4c57-a093-aaaeef30b13a.jpg?v=1717665518&width=535",
            "https://bellavitaorganic.com/cdn/shop/files/Ocean-04_daeee035-721a-48ae-836b-969a51b6582b.jpg?v=1717665518&width=535",
            "https://bellavitaorganic.com/cdn/shop/files/Ocean-06.jpg?v=1717665518&width=535",
        ],
        description:
            "Splash into a sea of freshness with Ocean Man. An aquatic fragrance, Ocean opens with the fresh energy of citrus notes. At its heart lies orchid, making you lose yourself to the depth of the Ocean. The base notes of musk are woody, sweeping you off in a wave of long-lasting confidence. Ocean keeps you calm as you travel, work or play.",
        note: " Note: Always do a patch test before using the product.Bella Vita Organic products are created using natural products so their colour and fragrance may vary over time but will not affect the efficacy of the product.",
        keyBenefits:
            "- IFRA-certified and Safe to Use on Skin - Long-lasting - Made with Imported Oils",
        howToUse:
            "Spray the perfume on your pulse points such as sides of the neck and wrists for all day freshness.",
    }

    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        return JSON.parse(localStorage.getItem('recentlyViewed')) || [defaultProduct];
    })

    console.log(recentlyViewed)

    const addRecentlyViewed = (product) => {
        setRecentlyViewed(prev => {
            const updated = [product, ...prev.filter(p => p.id !== product.id)].slice(0, 10);
            localStorage.setItem('recentlyViewed', JSON.stringify(updated));
            return updated;
        });
    }

    return (
        <RecentlyViewedContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
            {children}
        </RecentlyViewedContext.Provider>
    )
}
