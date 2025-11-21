                 
const button = document.getElementById("fetchJoke");    //seleccionamos el boton
const list = document.getElementById("jokeList");       //seleccionamos la <ul>

button.addEventListener("click", async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    const li = document.createElement("li");
    
    li.textContent = data.value;

    list.appendChild(li);
});