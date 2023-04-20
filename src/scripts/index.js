import { filterProducts, inputFilter } from "./filters.js";
import { categories, products } from "./productsData.js";
import { createElements, renderElements } from "./renderiza.js";
import { darkChange, getDark } from "./theme.js"

filterProducts(products);
inputFilter(products);
createElements(products[0]);
renderElements(products);
darkChange();
getDark()