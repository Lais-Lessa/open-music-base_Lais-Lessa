/* Desenvolva sua lógica aqui ... */
//Função vai selecionar o botão de ação, para a mudança do tema.
export function darkChange() {
    const darkButtom = document.querySelector(".button__icon");
    const darkContainer = document.querySelector("body");

    darkButtom.addEventListener('click', function (e) {
        darkContainer.classList.toggle("dark");

        if (darkContainer.classList.contains("dark")){
            darkButtom.innerHTML = `<i class="fa-solid fa-sun"></i>`
        } else {
            darkButtom.innerHTML = '<i class="fa-solid fa-moon"></i>'
        }
        
        const darkMode = darkContainer.classList.contains("dark")

        localStorage.setItem("dark", darkMode)
        
})
};

export function getDark(){
        const getLocalStorage = localStorage.getItem("dark") === "true"
        console.log(getLocalStorage)

    
        if(getLocalStorage){
        const darkContainer = document.querySelector("body");
        const darkButtom = document.querySelector(".button__icon");
        darkContainer.classList.add("dark");
        darkButtom.innerHTML = `<i class="fa-solid fa-sun"></i>`
}

}