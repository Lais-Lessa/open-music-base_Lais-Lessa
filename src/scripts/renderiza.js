export function renderElements(array){
    const renderElements = document.querySelector(".render__music");
    renderElements.innerHTML = ""; //Limpar o HTML

    array.forEach(function (item) {
        createElements(item);
    });

};  


export function createElements (item){

    const renderCardMusic = document.querySelector(".render__music");

    const cardDiv = document.createElement("div"); 
    cardDiv.classList.add("render__cart");

    const cardImg = document.createElement("img"); 
    cardImg.classList.add("cart__img");
    cardImg.src = item.img;

    const containerSpan = document.createElement("div");
    containerSpan.classList.add("render__span");

    const divSpanTitle = document.createElement("span");
    divSpanTitle.classList.add("render__span-music");
    divSpanTitle.textContent = item.band;

    const divSpanYear = document.createElement("span"); 
    divSpanYear.classList.add("render__span-year");
    divSpanYear.textContent = item.year;

    containerSpan.appendChild(divSpanTitle);
    containerSpan.appendChild(divSpanYear);

    const cardP = document.createElement("p"); 
    cardP.classList.add("render__music-paragraph"); 
    cardP.textContent = item.title;

    const cardDivMusic = document.createElement("div"); 
    cardDivMusic.classList.add("render__value");

    const cardText = document.createElement("p"); 
    cardText.classList.add("render__value-text");
    cardText.textContent = "R$ " + item.price;

    const cardButton = document.createElement("button");
    cardButton.classList.add("button__cart");
    cardButton.textContent = "Comprar";


    cardDivMusic.appendChild(cardText);
    cardDivMusic.appendChild(cardButton);


    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(containerSpan);
    cardDiv.appendChild(cardP);
    cardDiv.appendChild(cardDivMusic);

    renderCardMusic.appendChild(cardDiv);
};