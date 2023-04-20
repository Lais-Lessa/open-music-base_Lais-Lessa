import { categories, products } from "./productsData.js";
import { renderElements } from "./renderiza.js";

export function filterProducts (array){

    const filters = document.querySelectorAll(".option__button");

    let productsFilter = [];

    filters.forEach(function (button){

        button.addEventListener("click", function (event){

            const searchIndex = categories.indexOf(button.textContent);


            if(searchIndex === 0) {
                productsFilter = products;

            } else{
                productsFilter = array.filter(item => item.category === searchIndex)
                     
            };

            renderElements(productsFilter);
        });
    });
};

export function inputFilter(array){
    const inputRange = document.getElementById("input__range");
    const spanValue = document.querySelector(".input__value");

    inputRange.addEventListener("input", function (){
        const value = inputRange.value

        spanValue.textContent = "Até R$" + value;

        const valueInput = array.filter(function (item){
            return item.price <= value
            
        });

        renderElements(valueInput);
});
};

