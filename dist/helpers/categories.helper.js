import { Category } from "../types/types.js";
export const handleCategoryChange = (category) => {
    if (category === Category.OTHER) {
        console.log(`Category changed to ${Category.OTHER}`);
    }
    else if (category === Category.WORK) {
        console.log(`Category changed to ${Category.WORK}`);
    }
    else if (category === Category.GYM) {
        console.log(`Category changed to ${Category.GYM}`);
    }
    else if (category === Category.HOBBY) {
        console.log(`Category changed to ${Category.HOBBY}`);
    }
    else {
        const never = category;
        console.log(never);
    }
};
